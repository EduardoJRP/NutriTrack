'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Common/Navbar';
import AddFoodModal from '@/app/components/Modals/Modal';

const FOOD_LOG = [
  {
    food: 'Avocado Toast',
    serving: '2 slices',
    calories: '350 kcal',
    time: '8:00 AM',
  },
  {
    food: 'Chicken Salad',
    serving: '1 cup',
    calories: '450 kcal',
    time: '12:30 PM',
  },
  {
    food: 'Salmon with Vegetables',
    serving: '1 fillet',
    calories: '600 kcal',
    time: '7:00 PM',
  },
];

export default function DashboardPage() {
  const [foodLog, setFoodLog] = useState(FOOD_LOG);
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {showModal && (
        <AddFoodModal
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}

      {/* Main content */}
      <main className="p-8 grid gap-8 md:grid-cols-1">
        {/* TODO: Daily Caloric Intake, Goal*/}

        {/* Food Log */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Food Log</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Food</th>
                <th className="pb-2">Serving Size</th>
                <th className="pb-2">Calories</th>
                <th className="pb-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {foodLog.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx !== foodLog.length - 1 ? 'border-b' : ''}
                >
                  <td className="py-2">{item.food}</td>
                  <td>{item.serving}</td>
                  <td>{item.calories}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2"
              onClick={() => setShowModal(true)}
            >
              Add Food
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2">
              Add Entry
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
