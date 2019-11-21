import { DeviceContext } from './DeviceContext';
import { DeviceMakeModel } from './Devices';

export const TemperatureContext = {
  requestedTemperature: 195
}

export function applyRequestedTemperature(temp: number) {
  const { makeAndModel } = DeviceContext;

  switch (makeAndModel) {
    case DeviceMakeModel.LUCCA_M58:
      TemperatureContext.requestedTemperature = temp - 1;
      break;
    default:
      TemperatureContext.requestedTemperature = temp;
      break;
  }
}