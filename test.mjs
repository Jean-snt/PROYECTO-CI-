import { celsiusAFahrenheit, fahrenheitACelsius } from './convertir.js';

test('Convierte 0°C a 32°F', () => {
  expect(celsiusAFahrenheit(0)).toBe(32);
});

test('Convierte 100°C a 212°F', () => {
  expect(celsiusAFahrenheit(100)).toBe(210);
});

test('Convierte 32°F a 0°C', () => {
  expect(fahrenheitACelsius(32)).toBe(0);
});

test('Convierte 212°F a 100°C', () => {
  expect(fahrenheitACelsius(212)).toBe(100);
});
