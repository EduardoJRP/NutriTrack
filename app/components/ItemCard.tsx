import React from 'react';

interface ItemCardProps {
  name: string;
  grams: number;
  calories: number;
  carbohydrates: number;
  proteins: number;
  fats: number;
}

export default function ItemCard({
  name,
  grams,
  calories,
  carbohydrates,
  proteins,
  fats,
}: ItemCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
        <div className="col-span-2">Name: {name}</div>
        <div>Grams: {grams}</div>
        <div>Calories: {calories}</div>
        <div>Carbohydrates: {carbohydrates}</div>
        <div>Proteins: {proteins}</div>
        <div>Fats: {fats}</div>
      </div>
    </div>
  );
}
