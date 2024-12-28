import React, { useState, useCallback } from 'react';
import { ItemData } from '../../types/item';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ItemData;
  onUpdate: (updatedItem: ItemData) => void;
}

export default function UpdateModal({
  isOpen,
  onClose,
  item,
  onUpdate,
}: UpdateModalProps) {
  const [formData, setFormData] = useState<ItemData>({ ...item });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleSubmit = useCallback(() => {
    const updatedItem = {
      ...formData,
      quantity: Number(formData.quantity),
      calories: Number(formData.calories),
      carbohydrates: Number(formData.carbohydrates),
      fats: Number(formData.fats),
      proteins: Number(formData.proteins),
    };
    onUpdate(updatedItem);
    onClose();
  }, [formData, onUpdate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 p-4">Update Item</h1>
        <form
          className="space-y-4 flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg w-48">
              Name of the food
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Name"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Grams
            </span>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Quantity (g)"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Calories
            </span>
            <input
              type="number"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Calories"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Calories
            </span>
            <input
              type="number"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Calories"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Carbohydrates
            </span>
            <input
              type="number"
              name="carbohydrates"
              value={formData.carbohydrates}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Carbohydrates"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Fats
            </span>
            <input
              type="number"
              name="fats"
              value={formData.fats}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Fats"
              required
            />
          </label>
          <label className="flex flex-row w-full p-3">
            <span className="self-center font-semibold text-lg pr-4 w-48">
              Proteins
            </span>
            <input
              type="number"
              name="proteins"
              value={formData.proteins}
              onChange={handleChange}
              className="no-arrows border flex-grow border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Proteins"
              required
            />
          </label>
        </form>
        <div className="flex justify-end space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
