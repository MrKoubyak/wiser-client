// Access the domain API structure
import ISystem from './api/System.js';
// Convert temperature from API format to number
import { temperatureFromApi } from './Utils.js';

//
// System status of the Wiser system.
//
export class System {
  // Brand of the Wiser Hub.
  readonly model: string;
  
  // Software version of the Wiser Hub.
  readonly version: string;

 // Whether Eco mode is enabled.
  readonly ecoMode: boolean;

  // Whether Away mode is active.
  readonly awayMode: boolean;

  // Set point temperature of Away mode.
  readonly awayModeSetPoint: number;

  // Whether the physical heating override button has been pressed.
  readonly heatingOverrideEnabled: boolean;

  // Whether any rooms have overrides set.
  readonly overridesActive: boolean;

  constructor(json: ISystem) {
    this.model = json.BrandName;
    this.version = json.ActiveSystemVersion;
    this.ecoMode = json.EcoModeEnabled;
    this.awayMode = json.OverrideType === 'Away';
    this.awayModeSetPoint = <number>(
      temperatureFromApi(json.AwayModeSetPointLimit)
    );
    this.heatingOverrideEnabled = json.HeatingButtonOverrideState === 'On';
    this.overridesActive = json.UserOverridesActive || false;
  }
}