//
// Domain of Wiser system.
//
// This combines all of the other message from the API into a single model.
//
import System from './System.js';
import Cloud from './Cloud.js';
import HeatingChannel from './HeatingChannel.js';
import HotWater from './HotWater.js';
import Room from './Room.js';
import Device from './Device.js';
import ZigbeeInfo from './Zigbee.js';
import SmartValve from './SmartValve.js';
import Light from './Light.js';
import Shutter from './Shutter.js';
import Moment from './Moment.js';
import BinarySensor from './BinarySensor.js';
import ThresholdSensor from './ThresholdSensor.js';
import AutomationMsg from './Automation.js';
import SmokeAlarmDevice from './SmokeAlarmDevice.js';
import DeviceCapabilityMatrix from './DeviceCapabilityMatrix.js';
import FeatureCapability from './FeatureCapability.js';
import Schedule from './Schedule.js';

export default interface Domain {
   System: System;
   Cloud: Cloud;
   HeatingChannel: HeatingChannel[];
   HotWater: HotWater[];
   Room: Room[];
   Device: Device[];
   Zigbee: ZigbeeInfo;
   SmartValve: SmartValve[];
   Light: Light[];
   Shutter: Shutter[];
   Moment: Moment[];
   BinarySensor: BinarySensor[];
   ThresholdSensor: ThresholdSensor[];
   Automation: AutomationMsg[];
   SmokeAlarmDevice: SmokeAlarmDevice[];
   DeviceCapabilityMatrix: DeviceCapabilityMatrix;
   FeatureCapability: FeatureCapability;
   Schedule: Schedule[];
}