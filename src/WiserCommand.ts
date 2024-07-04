import { program } from 'commander';
import { WiserHub } from './WiserHub.js';

interface CommandOptions {
    secret: string;
    address?: string;
}

program
    .version('0.0.1')
    .requiredOption('-s, --secret <secret>', 'Wiser system secret')
    .option('-a, --address <address>', 'IP or address of Wiser system');

program
    .command('status')
    .description('Fetch the system status')
    .action(Status);

program
    .command('devices')
    .description('List all devices in the system')
    .action(Devices);

program
    .command('device <id>')
    .description('Show status of a device')
    .action(Device);

program
    .command('rooms')
    .description('List status of all rooms')
    .action(Rooms);

program
    .command('room <id>')
    .description('Show status of a room')
    .action(Room);

program.parse(process.argv);

function wiserClient(): WiserHub {
    const options: CommandOptions = program.opts();
    if (options.address) {
        console.log('CMD : Using fixed address: ' + options.address);
        return WiserHub.clientWithAddress(options.secret, options.address);
    } else {
        console.log('CMD : Using discovery service');
        return WiserHub.clientWithDiscovery(options.secret);
    }
}
function Status(): void {
    const client:WiserHub = wiserClient();
    client
        .status()
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
    ;
}
function Rooms(): void {
    const client: WiserHub = wiserClient();
    client
        .rooms()
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
    ;
}
function Room(id:number): void {
    const client: WiserHub = wiserClient();
    client
        .room(id)
        .then(response => console.log('Room:', JSON.stringify(response)))
        .catch(err => console.error(err));
    ;
}
function Devices(): void {
    const client: WiserHub = wiserClient();
    client
        .devices()
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
    ;
}
function Device(id: number): void {
    const client: WiserHub = wiserClient();
    client
        .device(id)
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
    ;
}
