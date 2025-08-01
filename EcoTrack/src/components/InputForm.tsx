import React from 'react';
import type { UserInput, TransportMode, FoodHabit } from '../types';

interface InputFormProps {
  userInput: UserInput;
  onInputChange: (field: keyof UserInput, value: string | number) => void;
  onSubmit: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ userInput, onInputChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Carbon Footprint</h2>
        
        {/* Daily Travel Distance */}
        <div className="mb-4">
          <label htmlFor="dailyTravelDistance" className="block text-sm font-medium text-gray-700 mb-2">
            Daily Travel Distance (km)
          </label>
          <input
            type="number"
            id="dailyTravelDistance"
            value={userInput.dailyTravelDistance}
            onChange={(e) => onInputChange('dailyTravelDistance', parseFloat(e.target.value) || 0)}
            className="input-field"
            min="0"
            step="0.1"
            required
          />
        </div>

        {/* Transport Mode */}
        <div className="mb-4">
          <label htmlFor="transportMode" className="block text-sm font-medium text-gray-700 mb-2">
            Transport Mode
          </label>
          <select
            id="transportMode"
            value={userInput.transportMode}
            onChange={(e) => onInputChange('transportMode', e.target.value as TransportMode)}
            className="input-field"
            required
          >
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="bike">Bike</option>
          </select>
        </div>

        {/* Monthly Electricity Usage */}
        <div className="mb-4">
          <label htmlFor="monthlyElectricityUsage" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Electricity Usage (kWh)
          </label>
          <input
            type="number"
            id="monthlyElectricityUsage"
            value={userInput.monthlyElectricityUsage}
            onChange={(e) => onInputChange('monthlyElectricityUsage', parseFloat(e.target.value) || 0)}
            className="input-field"
            min="0"
            step="0.1"
            required
          />
        </div>

        {/* Food Habit */}
        <div className="mb-6">
          <label htmlFor="foodHabit" className="block text-sm font-medium text-gray-700 mb-2">
            Food Habit
          </label>
          <select
            id="foodHabit"
            value={userInput.foodHabit}
            onChange={(e) => onInputChange('foodHabit', e.target.value as FoodHabit)}
            className="input-field"
            required
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-vegetarian</option>
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Calculate Carbon Footprint
        </button>
      </div>
    </form>
  );
};

export default InputForm;
