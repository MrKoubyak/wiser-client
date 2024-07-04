/**
 * Minimum allowed set point for a room.
 */
export const MIN_SET_POINT = 5;
/**
 * Maximum allowed set point for a room.
 */
export const MAX_SET_POINT = 30;
/** @internal */
export const OFF_SET_POINT = -20;

/**
 * Convert a temperature value from the API to a number.
 *
 * @param apiValue - The temperature value from the API.
 * @returns The temperature as a number.
 */
export function temperatureFromApi(apiValue?: number): number | undefined {
  if (apiValue) {
    return apiValue / 10;
  }

  return undefined;
}

export function temperatureToApi(temperature?: number): number | undefined {
  if (temperature) {
    return Math.floor(temperature * 10);
  }

  return undefined;
}