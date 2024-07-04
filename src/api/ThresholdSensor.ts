export default interface ThresholdSensor {
    id: number;
    DeviceId: number;
    UUID: string;
    Quantity: string;
    HighThreshold: number;
    MediumThreshold: number;
    LowThreshold: number;
    InteractsWithRoomClimate: boolean;
    CurrentValue: number;
    CurrentLevel: string;
}