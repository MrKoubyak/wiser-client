export default interface SmartValve {
  id: number;
  UUID: string;
  MountingOrientation: MountingOrientationType;
  SetPoint: number;
  MeasuredTemperature: number;
  PercentageDemand: number;
  WindowState: string;
  ExternalRoomStatTemperature?: number;
}
export enum MountingOrientationType {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
  Unknown = 'Unknown',
}