import React from 'react';

interface ItemCardProps {
  name: string;
  id: number;
  quantity: number;
  calories: number;
  carbohydrates: number;
  proteins: number;
  fats: number;
  onDelete: (id: number) => void;
}

export default function ItemCard({
  name,
  id,
  quantity,
  calories,
  carbohydrates,
  proteins,
  fats,
  onDelete,
}: ItemCardProps) {
  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onDelete(id);
  };
  return (
    <div className="flex flex-row">
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-md">
        <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
          <div>Name: {name}</div>
          <div>Quantity: {quantity}g</div>
          <div>Calories: {calories}</div>
          <div>Carbohydrates: {carbohydrates}</div>
          <div>Proteins: {proteins}</div>
          <div>Fats: {fats}</div>
        </div>
      </div>
      <button
        className="w-1/8 bg-orange-500 text-white font-semibold rounded-lg py-2 px-4 m-4 hover:bg-orange-600 transition-all"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
