/* eslint-disable no-unused-vars */
class ElectroDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isActive = false;
  }

  turnDevice() {
    this.isActive = true;
  }
}
class House {
  constructor() {
    this.devices = [];
  }

  addDevices(device) {
    this.devices.push(device);
  }

  searchDeviceInHouse(name) {
    if (typeof name !== 'string' || name.length === 0) {
      console.log('Enter a valid name');
    } else {
      const foundDevice = this.devices.find(
      );

      if (foundDevice) {
        console.log(foundDevice);
      } else {
        console.log('Not found');
      }
    }
  }

  calculateUsedPower() {
    const usedPower = 0;
    const activeDevices = this.devices.filter((device) => device.isActive);
    activeDevices.forEach((device) => (usedPower === usedPower + device.power));
    console.log(usedPower);
  }
}
