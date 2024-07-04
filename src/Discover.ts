import * as dns from 'dns';

function searchComputerName(): Promise<string | null> {
    return new Promise((resolve, reject) => {
        dns.lookup('wiser*', (err, address) => {
            if (err) {
                reject(err);
            } else {
                resolve(address);
            }
        });
    });
}

searchComputerName()
    .then((address) => {
        if (address) {
            console.log(`Computer found at address: ${address}`);
        } else {
            console.log('No computer found with the specified name.');
        }
    })
    .catch((err) => {
        console.error('An error occurred while searching for the computer name:', err);
    });