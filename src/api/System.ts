export default interface System {
    PairingStatus: string;
    OverrideType: string;
    TimeZoneOffset: number;
    AutomaticDaylightSaving: boolean;
    SystemMode: string;
    FotaEnabled: boolean;
    ValveProtectionEnabled: boolean;
    EcoModeEnabled: boolean;
    AwayModeAffectsHotWater: boolean;
    AwayModeSetPointLimit: number;
    BoilerSettings: BoilerSettings;
    CoolingModeDefaultSetpoint: number;
    CoolingAwayModeSetpointLimit: number;
    ComfortModeEnabled: boolean;
    PreheatTimeLimit: number;
    DegradedModeSetpointThreshold: number;
    GeoPosition: GeoPositionSettings;
    UnixTime: number;
    ActiveSystemVersion: string;
    ZigbeePermitJoinActive?: boolean;
    BrandName: string;
    CloudConnectionStatus: string;
    LocalDateAndTime: SystemDate;
    HeatingButtonOverrideState: string;
    UserOverridesActive?: boolean;
    HotWaterButtonOverrideState: string;
    OpenThermConnectionStatus: string;
    isProvisioned: boolean;
    HardwareGeneration: number;
}
export interface SystemDate {
    Year: number;
    Month: string;
    Date: number;
    Day: string;
    Time: number;
}
export interface BoilerSettings {
    ControlType: string;
    FuelType: string;
    CycleRate: string;
    OnOffHysteresis: number;
}
export interface GeoPositionSettings {
    Latitude: number;
    Longitude: number;
}