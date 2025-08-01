import type { EmissionFactors } from '../types';

export const emissionFactors: EmissionFactors = {
  transport: {
    car: 0.21, // kg CO₂/km
    bus: 0.089, // kg CO₂/km
    train: 0.041, // kg CO₂/km
    bike: 0, // kg CO₂/km
  },
  electricity: 0.85, // kg CO₂/kWh
  food: {
    vegetarian: 1.5, // kg CO₂/day
    'non-vegetarian': 3.5, // kg CO₂/day
  },
};
