export default interface SmokeAlarmDevice {
    id: number;
    UUID: string;
    DeviceId: number;
    LEDBrightness: number;
    AlarmSoundLevel: number;
    AlarmSoundMode: number;
    LifeTime: number;
    HushDuration: number;
    SmokeAlarm: boolean;
    HeatAlarm: boolean;
    Tamper: boolean;
    FaultWarning: boolean;
    ACMains: boolean;
    TestMode: boolean;
    BatteryDefect: boolean;
    RemoteAlarm: boolean;
    HushMode: boolean;
    ReportCount: number;
    EnableNotification: boolean;
    SupervisionNotify: boolean;
    RestoreNotify: boolean;
    MeasuredTemperature: number;
}