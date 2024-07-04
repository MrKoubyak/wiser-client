export default interface Shutter {
    id: number;
    DeviceId: number;
    Endpoint: number;
    ManualLift: number;
    ManualTilt: number;
    OverrideLift: number;
    DriveConfig: DriveConfig;
    UUID: string;
    IsLiftPositionSupported: boolean;
    IsTiltSupported: boolean;
    Name: string;
    ScheduleId: number;
    RoomId: number;
    Mode: string;
    AwayAction: string;
    CurrentLift: number;
    CurrentTilt: number;
    ControlSource: string;
    ScheduledLift: number;
    TargetLift: number;
    TargetTilt: number;
    LiftMovement: string;
    TiltMovement: string;
}
export interface DriveConfig {
    LiftOpenTime: number;
    LiftCloseTime: number;
    TiltTime: number;
    TiltEnabled: boolean;
    TiltAngleClosed: number;
    TiltAngleOpen: number;
}