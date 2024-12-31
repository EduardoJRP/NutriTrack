import React, { useState, useEffect } from 'react';
import { ItemData } from '../../types/item';

interface DonutChartProps {
  onCaloriesIntakeChange: (value: number) => void;
  onProteinsIntakeChange: (value: number) => void;
  onCarbohydratesIntakeChange: (value: number) => void;
  onFatsIntakeChange: (value: number) => void;
}

const DonutChart: React.FC<DonutChartProps> = ({
  onCaloriesIntakeChange,
  onProteinsIntakeChange,
  onCarbohydratesIntakeChange,
  onFatsIntakeChange,
}) => {
  const [caloriesIntake, setCaloriesIntake] = useState<number>(1);

  // Fetch all information intake data from the backend
  useEffect(() => {
    async function fetchCaloriesIntake() {
      try {
        const response = await fetch('/api/getList');
        const data = await response.json();
        if (data.success) {
          const calories = data.data.map((item: ItemData) => item.calories);
          const proteins = data.data.map((item: ItemData) => item.proteins);
          const carbohydrates = data.data.map((item: ItemData) => item.carbohydrates);
          const fats = data.data.map((item: ItemData) => item.fats);

          // Calculate total intake and call the callback functions
          const totalCalories = calories.reduce((acc: number, curr: number) => acc + curr, 0);
          const totalProteins = proteins.reduce((acc: number, curr: number) => acc + curr, 0);
          const totalCarbohydrates = carbohydrates.reduce((acc: number, curr: number) => acc + curr, 0);
          const totalFats = fats.reduce((acc: number, curr: number) => acc + curr, 0);

          setCaloriesIntake(totalCalories);

          onCaloriesIntakeChange(totalCalories);
          onProteinsIntakeChange(totalProteins);
          onCarbohydratesIntakeChange(totalCarbohydrates);
          onFatsIntakeChange(totalFats);
        } else {
          console.error(`Error fetching calories intake: ${data.error}`);
        }
      } catch (error) {
        console.error(`Network error: ${error}`);
      }
    }
    fetchCaloriesIntake();
  }, [onCaloriesIntakeChange, onProteinsIntakeChange, onCarbohydratesIntakeChange, onFatsIntakeChange]);

  const size = 150;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (caloriesIntake / 2000) * circumference;

  return (
    <div className="p-6">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="lightgray"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="orange"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="1.5em"
          fill="black"
        >
          {`${Math.round((caloriesIntake / 2000) * 100)}%`}
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;