import React, { useState } from 'react';
import { ItemData } from '../../types/item';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    quantity: number;
    calories: number;
    carbohydrates: number;
    proteins: number;
    fats: number;
  };
  onUpdate: (updatedItem: ItemData) => void;
}

export default function UpdateModal({
  isOpen,
  onClose,
  item,
  onUpdate,
}: UpdateModalProps) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
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
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Update Item</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Name"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Quantity (g)"
          />
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Calories"
          />
          <input
            type="number"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Carbohydrates"
          />
          <input
            type="number"
            name="fats"
            value={formData.fats}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Fats"
          />
          <input
            type="number"
            name="proteins"
            value={formData.proteins}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Proteins"
          />
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
