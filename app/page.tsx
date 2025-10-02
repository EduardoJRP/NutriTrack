'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Common/Navbar';
import AddFoodModal from '@/app/components/Modals/Modal';
import FoodsTableList from './api/foods/route';

const FOOD_LOG = [
  {
    food: 'Avocado Toast',
    serving: '2 slices',
    calories: '350 kcal',
  },
  {
    food: 'Chicken Salad',
    serving: '1 cup',
    calories: '450 kcal',
  },
  {
    food: 'Salmon with Vegetables',
    serving: '1 fillet',
    calories: '600 kcal',
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
          <FoodsTableList />

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
