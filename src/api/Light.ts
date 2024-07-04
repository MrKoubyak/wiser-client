export default interface Light {
    id: number;
    DeviceId: number;
    Endpoint: number;
    IsDimmable: boolean;
    ManualLevel: number;
    OutputRange: OutputRange;
    UUID: string;
    Name: string;
    RoomId: number;
    Mode: string;
    AwayAction: string;
    CurrentState: string;
    CurrentPercentage: number;
    CurrentLevel: number;
    ControlSource: string;
    TargetState: string;
    TargetPercentage: number;
}
export interface OutputRange {
    Minimum: number;
    Maximum: number;
}