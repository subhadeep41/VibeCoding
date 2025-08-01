import { useState } from 'react';
import Home from './pages/Home';
import { emissionFactors } from './data/emissionFactors';
import type { UserInput, CarbonFootprint } from './types';

function App() {
  const [userInput, setUserInput] = useState<UserInput>({
    dailyTravelDistance: 0,
    transportMode: 'car',
    monthlyElectricityUsage: 0,
    foodHabit: 'vegetarian'
  });

  const [carbonFootprint, setCarbonFootprint] = useState<CarbonFootprint | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof UserInput, value: string | number) => {
    setUserInput(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCarbonFootprint = (input: UserInput): CarbonFootprint => {
    // Calculate transport emissions (daily distance * 30 days * emission factor)
    const transportEmissions = input.dailyTravelDistance * 30 * emissionFactors.transport[input.transportMode];
    
    // Calculate electricity emissions
    const electricityEmissions = input.monthlyElectricityUsage * emissionFactors.electricity;
    
    // Calculate food emissions (daily * 30 days)
    const foodEmissions = emissionFactors.food[input.foodHabit] * 30;
    
    const total = transportEmissions + electricityEmissions + foodEmissions;
    
    return {
      transport: transportEmissions,
      electricity: electricityEmissions,
      food: foodEmissions,
      total
    };
  };

  const handleSubmit = () => {
    const footprint = calculateCarbonFootprint(userInput);
    setCarbonFootprint(footprint);
    setShowResults(true);
  };

  return (
    <Home 
      userInput={userInput}
      carbonFootprint={carbonFootprint}
      showResults={showResults}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}

export default App;
