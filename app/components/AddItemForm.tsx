import React, { useState } from 'react';
import { ItemData } from '../types/item';

export default function AddItemForm() {
  const [ItemData, setItemData] = useState<ItemData>({
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

    // Trim the name field
    const trimmedName = ItemData.name.trim();

    // Update the ItemData with the trimmed name
    setItemData((prevItemData) => ({
      ...prevItemData,
      name: trimmedName,
    }));

    // Log the submission data
    console.log('Form submitted:', { ...ItemData, name: trimmedName });

    // Send the data to the backend
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...ItemData, name: trimmedName }),
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
    <div className="bg-orange-300 rounded-xl p-5 max-w-lg w-full">
      <h1 className="text-xl font-bold">Add the info of the item</h1>
      <div className="flex flex-col w-full">
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Name of the food</span>
          <input
            name="name"
            type="text"
            placeholder="e.g. Egg"
            value={ItemData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Grams</span>
          <input
            name="quantity"
            type="number"
            placeholder="100"
            value={ItemData.quantity}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Calories</span>
          <input
            name="calories"
            type="number"
            placeholder="200"
            value={ItemData.calories}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Carbohydrates</span>
          <input
            name="carbohydrates"
            type="number"
            placeholder="18.1"
            value={ItemData.carbohydrates}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Fats</span>
          <input
            name="fats"
            type="number"
            placeholder="18.1"
            value={ItemData.fats}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Proteins</span>
          <input
            name="proteins"
            type="number"
            placeholder="18.1"
            value={ItemData.proteins}
            onChange={handleChange}
            className="no-arrows border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white font-semibold rounded-lg py-2 px-4 mt-4 hover:bg-orange-600 transition-all"
        >
          Submit!
        </button>
      </div>
    </div>
  );
}
