'use client';

import { useState } from 'react';
import Modal from '../Modals/Modal';

type Food = {
  id: string;
  name: string;
  servings: number;
  calories: number;
  grams: number;
};

export default function FoodsTableClient({
  initialFoods,
}: {
  initialFoods: Food[];
}) {
  const [foods, setFoods] = useState<Food[]>(initialFoods || []);
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
    setFoods((prev) => ([...prev, form] as Food[]));
    setForm({ food: '', serving: '', calories: '', time: '' });
    setShowModal(false);
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Food Log</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">Food</th>
            <th className="pb-2">Grams</th>
            <th className="pb-2">Calories</th>
            <th className="pb-2">Servings</th>
          </tr>
        </thead>
        <tbody>
          {foods.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-4 text-center text-gray-500">
                No food items found
              </td>
            </tr>
          ) : (
            foods.map((item, idx) => (
              <tr
                key={idx}
                className={idx !== foods.length - 1 ? 'border-b' : ''}
              >
                <td className="py-2">{item.name}</td>
                <td>{item.grams}</td>
                <td>{item.calories}</td>
                <td>{item.servings}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-6 flex gap-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2"
          onClick={() => setShowModal(true)}
        >
          Add Food
        </button>

        {showModal && (
          <Modal
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
