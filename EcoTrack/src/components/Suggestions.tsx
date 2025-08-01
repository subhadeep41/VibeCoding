import type { UserInput, CarbonFootprint, EcoBadge } from '../types';

export const generateImprovementTip = (userInput: UserInput, carbonFootprint: CarbonFootprint): string => {
  const tips = [];
  
  // Transport suggestions
  if (userInput.transportMode === 'car' && userInput.dailyTravelDistance > 10) {
    tips.push("Consider carpooling or using public transport to reduce your transport emissions.");
  }
  
  if (userInput.transportMode === 'car' && userInput.dailyTravelDistance <= 5) {
    tips.push("For short distances, consider walking or cycling instead of driving.");
  }
  
  // Electricity suggestions
  if (carbonFootprint.electricity > 200) {
    tips.push("Switch to energy-efficient appliances and consider renewable energy sources.");
  }
  
  // Food suggestions
  if (userInput.foodHabit === 'non-vegetarian') {
    tips.push("Reducing meat consumption can significantly lower your carbon footprint.");
  }
  
  // General suggestions based on total footprint
  if (carbonFootprint.total > 500) {
    tips.push("Your carbon footprint is high. Consider making lifestyle changes to reduce emissions.");
  } else if (carbonFootprint.total < 300) {
    tips.push("Great job! You're already living a low-carbon lifestyle.");
  } else {
    tips.push("There's room for improvement. Small changes can make a big difference.");
  }
  
  return tips.length > 0 ? tips[0] : "Consider making small changes to reduce your environmental impact.";
};

export const getEcoBadge = (totalFootprint: number): EcoBadge => {
  if (totalFootprint < 300) return 'Eco Warrior';
  if (totalFootprint <= 500) return 'Moderate';
  return 'Needs Improvement';
};
