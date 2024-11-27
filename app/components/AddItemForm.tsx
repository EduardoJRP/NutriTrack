import { Decimal } from '@prisma/client/runtime/library';
import React, { useState } from 'react';

interface FormData {
  name: string;
  grams: number;
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

export default function AddItemForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    grams: 0,
    calories: 0,
    carbohydrates: 0,
    fats: 0,
    proteins: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'number' && name !== 'grams' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // Trim the name field
    const trimmedName = formData.name.trim();

    // Update the formData with the trimmed name
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: trimmedName,
    }));

    // Log the submission data
    console.log('Form submitted:', { ...formData, name: trimmedName });

    // Send the data to the backend
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, name: trimmedName }),
      });

      const result = await response.json();
      if (result.success) {
        // Clear the form data on successful submission
        setFormData({
          name: '',
          grams: 0,
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
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <label className="flex flex-col w-full p-3">
          <span className="font-semibold text-lg">Grams</span>
          <input
            name="grams"
            type="number"
            placeholder="100"
            value={formData.grams}
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
            value={formData.calories}
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
            value={formData.carbohydrates}
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
            value={formData.fats}
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
            value={formData.proteins}
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
