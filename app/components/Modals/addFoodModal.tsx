'use client';

import { useState } from 'react';

export default function AddFoodModal() {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    food: '',
    serving: '',
    calories: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFoodLog((prev) => [...prev, form]);
    setForm({ food: '', serving: '', calories: '', time: '' });
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Add Food Entry</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              className="border rounded px-3 py-2"
              name="food"
              placeholder="Food"
              value={form.food}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              name="serving"
              placeholder="Serving Size"
              value={form.serving}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              name="calories"
              placeholder="Calories"
              value={form.calories}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              name="time"
              placeholder="Time"
              value={form.time}
              onChange={handleChange}
              required
            />
            <div className="flex gap-2 justify-end mt-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
