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
  onUpdate: (id: number) => void;
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
  onUpdate,
}: ItemCardProps) {
  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onDelete(id);
  }
  const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onUpdate(id);
  }
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
      <button
        className="w-1/8 bg-orange-500 text-white font-semibold rounded-lg py-2 px-4 m-4 hover:bg-orange-600 transition-all"
        onClick={handleUpdate}
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
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}
