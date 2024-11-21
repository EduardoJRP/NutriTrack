import React from 'react';

export default function ItemCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
        <div className="col-span-2">Name</div>
        <div>Grams</div>
        <div>Calories</div>
        <div>Carbohydrates</div>
        <div>Proteins</div>
        <div>Fats</div>
      </div>
    </div>
  );
}
