export default interface Room {
  id: number;
  ManualSetPoint?: number;
  ScheduleId: number;
  ComfortModeScore?: number;
  HeatingRate: number;
  RoomStatId?: number;
  SmartValveIds?: number[];
  Name: string;
  Mode: string;
  DemandType?: string;
  WindowDetectionActive: boolean;
  OccupiedToUnoccupiedDelay: number;
  MinimumOccupiedTime: number;
  CalculatedTemperature: number;
  CurrentSetPoint: number;
  PercentageDemand?: number;
  ControlOutputState?: string;
  WindowState?: string;
  SetpointOrigin: SetpointOrigin;
  DisplayedSetPoint: number;
  ScheduledSetPoint: number;
  RoundedAlexaTemperature?: number;
  ComfortTarget?: number;
  EffectiveMode: string;
  PercentageDemandForItrv?: number;
  ControlDirection?: string;
  HeatingType: HeatingType;
  OccupancyCapable: boolean;
  OccupiedHeatingSetPoint: number;
  UnoccupiedHeatingSetPoint: number;
  Invalid?: string;
  OverrideType?: string;
  OverrideSetpoint?: number;
  ControlSequenceOfOperation?: ControlType;
}

export enum ControlType {
  HeatingOnly = 'HeatingOnly',
  Unknown = 'Unknown',
}
export enum HeatingType {
  HydronicRadiator = 'HydronicRadiator',
  Unknown = 'Unknown',
}
export enum SetpointOrigin {
  FromSchedule = 'FromSchedule',
  FromManualOverride = 'FromManualOverride',
  FromManualOverrideDuringAway = 'FromManualOverrideDuringAway',
  FromBoost = 'FromBoost',
  FromAwayMode = 'FromAwayMode',
  Unknown = 'Unknown',
}
export enum RoomMode {
  /**
   * Normal scheduling for this room has been disabled and the only heat applied
   * will be to prevent freezing.
   *
   * This mode will not expire and will remain active until manually disabled.
   */
  Off,
  /**
   * Normal scheduling for this room has been disabled and a preset 'away' mode
   * temperature set.
   *
   * This mode will not expire and will remain active until manually disabled.
   */
  Away,
  /**
   * Normal scheduling is active for this room without any overrides.
   */
  Auto,
  /**
   * A temporary boost has been set above the scheduled temperature.
   *
   * This boost will expire after a set period of time.
   */
  Boost,
  /**
   * A manual override temperature has been set.
   *
   * This override will not expire and will remain active until manually disabled.
   */
  Manual,
  /**
   * Mode for this room could not be determined.
   */
  Unknown = -1,
}