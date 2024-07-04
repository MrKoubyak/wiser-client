export default interface BinarySensor {
    id: number;
    DeviceId: number;
    Active: boolean;
    UUID: string;
    Type: string;
    EnableNotification: string;
    InteractsWithRoomClimate: boolean;
}