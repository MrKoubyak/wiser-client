export default interface Device {
  id: number;
  NodeId: number;
  ProductType: ProductType;
  ProductIdentifier: string;
  ActiveFirmwareVersion: string;
  ModelIdentifier: string;
  SerialNumber?: string;
  ProductModel?: string;
  OtaImageQueryCount?: number;
  LastOtaImageQueryCount?: number;
  OtaVersion: number;
  OtaHardwareVersion: number;
  Type: string;
  UUID: string;
  Name?: string;
  DeviceLockEnabled: boolean;
  RoomId?: number;
  DisplayedSignalStrength: string;
  BatteryVoltage?: number;
  BatteryLevel?: BatteryLevel;
  ReceptionOfController?: Reception;
  PendingZigbeeMessageMask?: number;
  BindingsStatus?: string;
  ReportConfigStatus?: string;
  AttributesStatus?: string;
  ReceptionOfDevice?: Reception;
  HardwareVersion?: string;
  ParentNodeId?: number;
}

export interface Reception {
  Rssi: number;
  Lqi?: number;
}

export enum BatteryLevel {
  Low = 'Low',
  OneThird = 'OneThird',
  TwoThirds = 'TwoThirds',
  Normal = 'Normal',
  Unknown = 'Unknown',
}
export enum ProductType {
  Hub = 'Controller',
  Shutter = 'Shutter',
  Thermostat = 'iTRV',
  DimmableLight = 'DimmableLight',
  OnOffLight = 'OnOffLight',
  RoomStat = 'RoomStat',
  TemperatureHumiditySensor = 'TemperatureHumiditySensor',
  WindowDoorSensor = 'WindowDoorSensor',
  MotionLightSensor = 'MotionLightSensor',
  SmokeAlarmDevice = 'SmokeAlarmDevice',
  Unknown = 'Unknown',
}
export enum ProductIdentifier {
  Controller = 'Controller',
  Shutter = 'NHPushButtonShutter',
  Dimmer = 'NHPushButtonDimmer',
  onOff = 'NHPushButtonLight',
  TemperatureHumiditySensor = 'TemperatureHumiditySensor',
  WindowDoorSensor = 'WindowDoorSensor',
  MotionLightSensor = 'MotionLightSensor',
  SmokeAlarmDevice = 'SmokeAlarmDCSquare',
  Thermostat = 'iTRV',
  RoomStat = 'RoomStat',
  Unknown = 'Unknown',
}