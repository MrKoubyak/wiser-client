// Access the domain API structure
import IRoom from './api/Room.js';

import { OFF_SET_POINT, temperatureFromApi } from './Utils.js';
import { ControlType, HeatingType, RoomMode, SetpointOrigin } from './api/Room.js';
//
// Device in the Wiser system.
//
export class Room {
  // Internal ID of the Room.
  readonly id: number;
  
  // Display name for the room.
  readonly name: string;

  // Whether the room is valid or not. Invalid rooms do not have any TRVs or
  // room thermostats and cannot be controlled.
  readonly isValid: boolean;

  // Control type for this room.
  readonly controlType?: ControlType;

  // Type of radiators in a room.
  readonly heatingType: HeatingType;

  // Current measured temperature of the room.
  // This will be `undefined` if the room is invalid.
  readonly temperature?: number;

  // Current target temperature for the room.
  // This will be `undefined` if the room is invalid.
  readonly setTemperature?: number;

  // Whether the room is being actively heated.
  // This will be `undefined` if the room is invalid.
  readonly active?: boolean;

  // Current control mode for a room.
  readonly mode: RoomMode;

  // ID of linked RoomStat (if any).
  readonly roomStatId?: number;

  // IDs of linked TRVs (if any).
  readonly thermostatIds: number[];

  constructor(json: IRoom) {
    this.id = json.id;
    this.name = json.Name;
    this.isValid = !json.Invalid;
    this.controlType = json.ControlSequenceOfOperation;
    this.heatingType = json.HeatingType;
    this.roomStatId = json.RoomStatId;
    this.thermostatIds = json.SmartValveIds ?? [];

    if (this.isValid) {
      this.temperature = temperatureFromApi(json.CalculatedTemperature);

      const setTemperature = temperatureFromApi(json.CurrentSetPoint);
      if (setTemperature !== OFF_SET_POINT) {
        this.setTemperature = setTemperature;
      }
      this.active = json.PercentageDemand ? json.PercentageDemand > 0 : false;

      switch (json.SetpointOrigin) {
        case SetpointOrigin.FromAwayMode:
          this.mode = RoomMode.Away;
          break;

        case SetpointOrigin.FromBoost:
          this.mode = RoomMode.Boost;
          break;

        case SetpointOrigin.FromManualOverride:
        case SetpointOrigin.FromManualOverrideDuringAway:
          if (this.setTemperature) {
            this.mode = RoomMode.Manual;
          } else {
            this.mode = RoomMode.Off;
          }
          break;

        case SetpointOrigin.FromSchedule:
          this.mode = RoomMode.Auto;
          break;

        default:
          this.mode = RoomMode.Unknown;
      }
    } else {
      this.mode = RoomMode.Unknown;
    }
  }
}
