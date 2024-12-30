import React from 'react';
import DonutChart from './DonutChart';

const TotalInfoCard: React.FC = () => {
  return (
    <div className="m-6 p-6 rounded-xl shadow-lg inline-block">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <DonutChart percentage={50} size={150} strokeWidth={20} />
          <h1 className="self-center text-xl font-semibold">Total Calories</h1>
        </div>
        <div className="flex flex-col justify-center p-6">
          <h1 className="self-center text-xl font-semibold">Proteins</h1>
          <h1 className="self-center text-xl font-semibold">Carbs</h1>
          <h1 className="self-center text-xl font-semibold">Fats</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalInfoCard;
