// Access the domain API structure
import IDomain from './api/Domain.js';
import ISystem from './api/System.js';
import IDevice from './api/Device.js';
import IRoom from './api/Room.js';
import IRequest from './api/Requests.js';
//
// Constructors
//
import { Domain } from './Domain.js';
import { Device } from './Device.js';
import { Room } from './Room.js';
import { SystemOverrideRequest, SystemOverrideType } from './api/Requests.js';
//
// Client for querying the Wiser Hub API
//
import { WiserHubDiscovery } from './WiserHubDiscovery.js';
import { System } from './System.js';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
}

export class WiserHub {
  private readonly discovery?: WiserHubDiscovery;

  //
  // Create a new WiserHub client
  //

  // Creates a new client instance that will attempt to auto-detect the address of the Hub.
  // @param secret secret key for the Wiser Hub.
  // @param prefix optional hostname prefix for finding Wiser Hub (defaults to `Wiser`).
  static clientWithDiscovery(secret: string, prefix?: string): WiserHub {
    return new WiserHub(secret, undefined, prefix);
  }

  // Creates a new client instance that will connect to the specified HeatHub.
  // @param secret secret key for the HeatHub.
  // @param address IP address or hostname of the HeatHub.
  static clientWithAddress(secret: string, address: string): WiserHub {
    return new WiserHub(secret, address);
  }

  constructor
    (
      private readonly secret: string,
      private readonly address?: string,
      discoveryName?: string,
    ) {
    // If a fixed address is not provided, use the discovery service to find the hub
    if (address == undefined) {
      console.log('HUB : Using discovery service');
      this.discovery = new WiserHubDiscovery(discoveryName);
    }
  }

  //
  // Make a request to the Wiser Hub API
  //
  private async request(endpoint: string, method: HttpMethod, body?: IRequest): Promise<any> {
    // Start the request
    console.log('HUB : Requesting API: ' + endpoint);

    // Get the address of the hub
    let address: string | undefined = this.address;
    console.log('HUB : Requesting IP: ' + address);

    // If no fixed address, try to discover the hub
    if (!address && this.discovery) {
      console.log('HUB : Perform discovery: ' + endpoint);
      address = await this.discovery.find();
    }

    // Create headers for the request
    const headers: Headers = new Headers();
    headers.set('SECRET', this.secret);
    headers.set('Accept', 'application/json');

    // Create the request arguments
    const args: RequestInit = {
      headers,
      method: method,
    };

    // Add body if provided
    if (body) {
      headers.set('Content-Type', 'application/json');
      args.body = JSON.stringify(body);
    }

    // Make the request

    const URL = `http://${address}/data/${endpoint}`;
    console.log('HUB : Requesting: ' + URL);

    // Make the request to Wiser Hub 
    try {
      const response = await fetch(URL, args);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      throw new Error('HUB : Error with Wiser Hub:' + error);
    }
  }

  //
  // Extract all data from the Wiser Hub API and return a domain object
  //
  async status(): Promise<Domain> {
    const response = await this.request(`domain/`, HttpMethod.GET);
    const api: IDomain = response;
    return new Domain(api);
  }

  //
  // Get the system status
  //
  async system(): Promise<System> {
    const response = await this.request(`domain/System`, HttpMethod.GET);
    const api: ISystem = response;
    return new System(api);
  }

  //
  // List all devices in the system
  //
  async devices(): Promise<Device[]> {
    const response = await this.request(`domain/Device`, HttpMethod.GET);
    const api: IDevice[] = response;
    return api.map((d) => new Device(d));
  }

  //
  // Retrieve a specific device
  //
  async device(id: number): Promise<Device> {
    const response = await this.request(`domain/Device/${id}`, HttpMethod.GET);
    const api: IDevice = response;
    return new Device(api);
  }

  //
  // List all rooms in the system
  //
  async rooms(): Promise<Room[]> {
    const response = await this.request(`domain/Room`, HttpMethod.GET);
    const api: IRoom[] = response;
    return api.map((d) => new Room(d));
  }

  //
  // Retrieve a specific room
  //
  async room(id: number): Promise<Room> {
    const response = await this.request(`domain/Room/${id}`, HttpMethod.GET);
    const api: IRoom = response;
    return new Room(api);
  }

  //
  // System Overrides
  //
  // Send a request to the Wiser Hub to override the system state
  private async overrideSystem(overrideType: SystemOverrideType): Promise<Domain> {
    // Build the request body
    const payload: SystemOverrideRequest = {
      RequestOverride: {
        Type: overrideType,
      }
    };
    // Send the request
    const response = await this.request(`domain/System/Override`, HttpMethod.PATCH, payload);
    // Check the response
    if (response.status !== 200) {
      throw new Error('unexpected-response');
    }
    // Return the full system info
    return this.status();
  }
  //
  // Away Mode
  //
  // Enable Away mode.
  // This set the set point of all rooms to a preset low temperature and disables all schedules.
  async enableAwayMode() {
    return this.overrideSystem(SystemOverrideType.Away);
  }
  // Disable Away mode. 
  // This does nothing if Away mode is not currently active.
  async disableAwayMode() {
    return this.overrideSystem(SystemOverrideType.Normal);
  }
}


