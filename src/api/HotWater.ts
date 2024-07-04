export default interface HotWater {
    id: number;
    ScheduleId: number;
    Mode: string;
    WaterHeatingState: WaterHeatingState;
    ScheduledWaterHeatingState: ScheduledWaterHeatingState;
    HotWaterRelayState: HotWaterRelayState;
    HotWaterDescription: string;
}

export enum WaterHeatingState {
    Off = 'Off',
    On = 'On',
    Unknown = 'Unknown',
}
export enum ScheduledWaterHeatingState {
    Off = 'Off',
    On = 'On',
    Unknown = 'Unknown',
}
export enum HotWaterRelayState {
    Off = 'Off',
    On = 'On',
    Unknown = 'Unknown',
}
