import React from 'react';
import type { CarbonFootprint, EcoBadge } from '../types';

interface ResultsCardProps {
  carbonFootprint: CarbonFootprint;
  ecoBadge: EcoBadge;
  improvementTip: string;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ carbonFootprint, ecoBadge, improvementTip }) => {
  const getBadgeColor = (badge: EcoBadge) => {
    switch (badge) {
      case 'Eco Warrior':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Needs Improvement':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Carbon Footprint Results</h2>
      
      {/* Total Carbon Footprint */}
      <div className="mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            {carbonFootprint.total.toFixed(1)} kg CO₂
          </div>
          <div className="text-sm text-gray-600">per month</div>
        </div>
      </div>

      {/* Eco Badge */}
      <div className="mb-6">
        <div className="text-center">
          <span className={`inline-block px-4 py-2 rounded-full border-2 font-semibold ${getBadgeColor(ecoBadge)}`}>
            {ecoBadge}
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Transport</span>
            <span className="font-semibold">{carbonFootprint.transport.toFixed(1)} kg CO₂</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Electricity</span>
            <span className="font-semibold">{carbonFootprint.electricity.toFixed(1)} kg CO₂</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Food</span>
            <span className="font-semibold">{carbonFootprint.food.toFixed(1)} kg CO₂</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>{carbonFootprint.total.toFixed(1)} kg CO₂</span>
          </div>
        </div>
      </div>

      {/* Improvement Tip */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Improvement Tip</h4>
        <p className="text-blue-700 text-sm">{improvementTip}</p>
      </div>
    </div>
  );
};

export default ResultsCard;
