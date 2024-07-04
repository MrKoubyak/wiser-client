export const DEFAULT_HUB_PREFIX = 'Wiser';
export class WiserHubDiscovery {

  constructor(readonly prefix = DEFAULT_HUB_PREFIX) {
    // eagerly start the discovery
    this.find();
  }
  find(){
    return "192.168.1.1";
  }
}