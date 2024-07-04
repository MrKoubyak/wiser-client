// Access the domain API structure
import { System } from './System.js';
import { Room } from './Room.js';
import { Device } from './Device.js';
import ApiDomain from './api/Domain.js';

//
// Complete status of Wiser system.
//
export class Domain {
  // retrieve System
  readonly system: System;
  
  // retrieve Devices
  readonly devices: Device[];
  
  // retrieve rooms
  readonly rooms: Room[];

  constructor(json:ApiDomain) {
    this.system = new System(json.System);
    this.devices = json.Device.map((d) => new Device(d));
    this.rooms = json.Room.map((r) => new Room(r));
  }
}