export default interface FeatureCapability {
    Automation: FeatureCapabilityAutomation;
}
export interface FeatureCapabilityAutomation {
    MaxActions: number;
    MaxTriggers: number;
    MaxTimeConstraints: number;
}