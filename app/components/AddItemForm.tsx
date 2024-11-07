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

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();

    setFormData((prepFormData) => ({
      ...prepFormData,
      name: trimmedName,
    }));

    console.log('Form submitted:', { ...formData, name: trimmedName });

    setFormData({
      name: '',
      grams: 0,
      calories: 0,
      carbohydrates: 0,
      fats: 0,
      proteins: 0,
    });
  };

  return (
    <div>
      <div className="bg-orange-300 rounded-xl p-5">
        <h1 className="text-xl font-bold">Add the info of the item</h1>
        <div className="flex flex-col w-full">
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Name of the food</span>
            <input
              name="name"
              type="text"
              placeholder="e.g. Egg"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Grams</span>
            <input
              name="grams"
              type="number"
              placeholder="100"
              value={formData.grams}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Calories</span>
            <input
              name="calories"
              type="number"
              placeholder="200"
              value={formData.calories}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Carbohydrates</span>
            <input
              name="carbohydrates"
              type="number"
              placeholder="18.1"
              value={formData.carbohydrates}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Fats</span>
            <input
              name="fats"
              type="number"
              placeholder="18.1"
              value={formData.fats}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            <span className="font-semibold text-lg">Proteins</span>
            <input
              name="proteins"
              type="number"
              placeholder="18.1"
              value={formData.proteins}
              onChange={handleChange}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
}
