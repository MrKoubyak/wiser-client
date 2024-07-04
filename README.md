# Wiser Client

This is based on the [drayton-wiser-client](https://github.com/stringbean/drayton-wiser-client) made few years ago by Micheal Stringer & on the [wiserHomeAssistantPlatform](https://github.com/asantaga/wiserHomeAssistantPlatform). This API Client have been upgraded to access [Wiser Hub 2nd Generation](https://www.productinfo.schneider-electric.com/wiser_home/)

## Usage
This client is initialy made to work with my [Wiser Homebridge Plugin](https://github.com/MrKoubyak/wiser-homebridge-plugin)

## Running the app

1. Obtain the secret key for your system:
   1. Press the setup button on your Wiser Hub.
   2. Connect your phone or PC/Mac to the temporary setup Wi-Fi hotspot called `WiserXXX`.
   3. Fetch the secret using a REST client (or just open in a browser) from: http://192.168.8.1/secret/
   4. Press the setup button on your Wiser Hub to exit setup mode.
2. Find your Hub IP Address or use the discovery service
3. List the status of your rooms using the app:
   ```shell script
    npm run WiserCommand -- -s $SECRET_KEY list
   ```

## Using the client

To create a client pass in the secret and address of the Wiser Hub, then start calling operations:

```typescript
import WiserHub from 'WiserHub';

const client = WiserHub.clientWithDiscovery('192.168.1.10';'secret');
const status = await client.ststus();

status.forEach((room) => {
  if (room.valid) {
    console.log(`${room.name}: ${room.temperature}ºc`);
  } else {
    console.log(`${room.name}: (invalid)`);
  }
});
```

Examples of each operation can be found in the app.

## Supported Operations

- System status: `client.status()`.
- List rooms statuses: `client.rooms()`.
- Single room status: `client.room(roomId)`.
- List devices statuses: `client.devices()`.
- Single device status: `client.device(deviceId)`.
- Manually set room target: `client.overrideRoomSetPoint(roomId, setPoint)`.
- Turn off a room: `client.disableRoom(roomId)`.
- Cancel room overrides: `client.cancelRoomOverride(roomId)`.
- Enable away mode: `client.enableAwayMode()`.
- Disable away mode: `client.disableAwayMode()`.
- Boost all rooms: `client.boostAllRooms()`.
- Cancel all room overrides: `client.cancelAllOverrides()`.
- Fetch the status of everything: `client.fullStatus()`.
