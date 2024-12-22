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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }, [formData]);

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Update Item</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Quantity (g)"
            required
          />
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Calories"
            required
          />
          <input
            type="number"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Carbohydrates"
            required
          />
          <input
            type="number"
            name="fats"
            value={formData.fats}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Fats"
            required
          />
          <input
            type="number"
            name="proteins"
            value={formData.proteins}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Proteins"
            required
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
