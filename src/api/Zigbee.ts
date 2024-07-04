export default interface Zigbee {
  Error72Reset?: number;
  JPANCount?: number;
  NetworkChannel: number;
  NoSignalReset?: number;
  UpdateEBLState?: string;
  CurrentEBLFile?: string;
  TargetEBLFile?: string;
  UpdateAttempts?: number;
  PanId: number;
  ZigbeeModuleVersion: string;
  TargetEBLFileUnsigned?: string;
  NetworkChannelRescan?: number;
  ZigbeeEUI: string;
}
