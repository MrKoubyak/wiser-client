export default interface UpdateRequest { }

export interface OverrideRequest extends UpdateRequest {
    RequestOverride: OverrideRequestBody;
}
export interface OverrideRequestBody {
    Type: OverrideType;
    SetPoint?: number;
}
export interface SystemOverrideRequest extends UpdateRequest {
    RequestOverride: SystemOverrideRequestBody;
}
export interface SystemOverrideRequestBody {
    Type: SystemOverrideType;
}

export enum OverrideType {
    None = 'None',
    Manual = 'Manual',
    Unknown = 'Unknown',
}
export enum SystemOverrideType {
    Normal = 0,
    Away = 2,
    BoostAllRooms = 4,
    CancelAllOverrides = 5,
}