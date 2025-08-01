export type TransportMode = 'car' | 'bus' | 'train' | 'bike';
export type FoodHabit = 'vegetarian' | 'non-vegetarian';

export interface UserInput {
  dailyTravelDistance: number;
  transportMode: TransportMode;
  monthlyElectricityUsage: number;
  foodHabit: FoodHabit;
}

export interface CarbonFootprint {
  transport: number;
  electricity: number;
  food: number;
  total: number;
}

export interface EmissionFactors {
  transport: Record<TransportMode, number>;
  electricity: number;
  food: Record<FoodHabit, number>;
}

export type EcoBadge = 'Eco Warrior' | 'Moderate' | 'Needs Improvement';
