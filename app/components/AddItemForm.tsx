import React, { useState } from 'react';
import { NewItemData } from '../types/item';

export default function AddItemForm() {
  const [itemData, setItemData] = useState<NewItemData>({
    name: '',
    quantity: 0,
    calories: 0,
    carbohydrates: 0,
    fats: 0,
    proteins: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setItemData((prevItemData) => ({
      ...prevItemData,
      [name]: type === 'number' && name !== 'grams' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const trimmedName = itemData.name.trim();
    setItemData((prevItemData) => ({
      ...prevItemData,
      name: trimmedName,
    }));

    // Log the submission data
    console.log('Form submitted:', { ...itemData, name: trimmedName });

    // Send the data to the backend
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...itemData, name: trimmedName }),
      });

      const result = await response.json();
      if (result.success) {
        // Clear the form data on successful submission
        setItemData({
          name: '',
          quantity: 0,
          calories: 0,
          carbohydrates: 0,
          fats: 0,
          proteins: 0,
        });
      } else {
        console.error('Error submitting form:', result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-orange-300 rounded-xl p-5 sm:p-8 max-w-lg sm:max-w-md w-full sm:h-auto sm:m-10">
      <h1 className="text-xl sm:text-lg font-bold">Add the info of the item</h1>
      <div className="flex flex-col w-full">
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Name of the food</span>
          <input
            name="name"
            type="text"
            placeholder="e.g. Egg"
            value={itemData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Grams</span>
          <input
            name="quantity"
            type="number"
            placeholder="100"
            value={itemData.quantity}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Calories</span>
          <input
            name="calories"
            type="number"
            placeholder="200"
            value={itemData.calories}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Carbohydrates</span>
          <input
            name="carbohydrates"
            type="number"
            placeholder="18.1"
            value={itemData.carbohydrates}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Fats</span>
          <input
            name="fats"
            type="number"
            placeholder="18.1"
            value={itemData.fats}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3 sm:px-0">
          <span className="font-semibold text-lg sm:text-sm">Proteins</span>
          <input
            name="proteins"
            type="number"
            placeholder="18.1"
            value={itemData.proteins}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 sm:p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-48 self-center bg-orange-500 text-white font-semibold rounded-lg py-2 px-4 mt-4 hover:bg-orange-600 transition-all"
        >
          Submit!
        </button>
      </div>
    </div>
  );
}
