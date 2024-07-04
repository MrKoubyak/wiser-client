export default interface Cloud {
  Environment?: string;
  DetailedPublishing: boolean;
  EnableDiagnosticTelemetry?: boolean;
  WiserApiHost: string;
  BootStrapApiHost: string;
  FioIsRegistered: boolean;
}
