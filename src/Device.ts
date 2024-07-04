// Access the domain API structure
import IDevice from './api/Device.js';
import { ProductType, BatteryLevel } from './api/Device.js';
//
// Device in the Wiser system.
//
export class Device {
  // Internal ID of the device.
  readonly id: number;
  
  // Serial number of the device.
  readonly UUID: string;
  
  // Display name of the device.
  readonly name: string = 'Generic Device';
  
  // Type of the device.
  readonly productType: ProductType;
  
  // Battery level of the device.
  readonly batteryLevel?: BatteryLevel;

  // Whether the device is locked.
  readonly deviceLocked: boolean;

  // Firmware version of the device.
  readonly firmwareVersion: string;

  constructor(json: IDevice) {
    this.id = json.id;
    this.UUID = json.UUID;
    this.name = json.Name || this.name;
    this.productType = json.ProductType;
    this.batteryLevel = json.BatteryLevel;
    this.deviceLocked = json.DeviceLockEnabled;
    this.firmwareVersion = json.ActiveFirmwareVersion;
  }
}
