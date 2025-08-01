import React from 'react';
import InputForm from '../components/InputForm';
import ResultsCard from '../components/ResultsCard';
import { generateImprovementTip, getEcoBadge } from '../components/Suggestions';
import type { UserInput, CarbonFootprint } from '../types';

interface HomeProps {
  userInput: UserInput;
  carbonFootprint: CarbonFootprint | null;
  showResults: boolean;
  onInputChange: (field: keyof UserInput, value: string | number) => void;
  onSubmit: () => void;
}

const Home: React.FC<HomeProps> = ({ 
  userInput, 
  carbonFootprint, 
  showResults, 
  onInputChange, 
  onSubmit 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-2">🌱 EcoTrack</h1>
          <p className="text-gray-600">Calculate your carbon footprint and discover ways to reduce your environmental impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div>
            <InputForm 
              userInput={userInput}
              onInputChange={onInputChange}
              onSubmit={onSubmit}
            />
          </div>

          {/* Results */}
          {showResults && carbonFootprint && (
            <div>
              <ResultsCard 
                carbonFootprint={carbonFootprint}
                ecoBadge={getEcoBadge(carbonFootprint.total)}
                improvementTip={generateImprovementTip(userInput, carbonFootprint)}
              />
            </div>
          )}
        </div>

        {/* Info Section */}
        {!showResults && (
          <div className="mt-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How it works</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Transport</h4>
                  <p>We calculate emissions based on your daily travel distance and chosen transport mode.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Electricity</h4>
                  <p>Your monthly electricity consumption is converted to carbon emissions using regional factors.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Food</h4>
                  <p>Dietary choices significantly impact your carbon footprint through food production emissions.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
