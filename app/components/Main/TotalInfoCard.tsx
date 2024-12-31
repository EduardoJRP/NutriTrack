import React from 'react';
import { useState } from 'react';
import DonutChart from './DonutChart';

const TotalInfoCard: React.FC = () => {
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [proteinsIntake, setProteinsIntake] = useState<number>(0);
  const [carbohydratesIntake, setCarbohydratesIntake] = useState<number>(0);
  const [fatsIntake, setFatsIntake] = useState<number>(0);

  return (
    <div className="m-6 p-6 rounded-xl shadow-lg inline-block">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <DonutChart
            onCaloriesIntakeChange={setTotalCalories}
            onProteinsIntakeChange={setProteinsIntake}
            onCarbohydratesIntakeChange={setCarbohydratesIntake}
            onFatsIntakeChange={setFatsIntake}
          />
          <h1 className="self-center text-xl font-semibold">{`Total Calories ${totalCalories}g`}</h1>
        </div>
        <div className="flex flex-col justify-center p-6">
          <h1 className="self-center text-xl font-semibold">{`Proteins ${proteinsIntake}g`}</h1>
          <h1 className="self-center text-xl font-semibold">{`Carbohydrates ${carbohydratesIntake}g`}</h1>
          <h1 className="self-center text-xl font-semibold">{`Fats ${fatsIntake}g`}</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalInfoCard;
