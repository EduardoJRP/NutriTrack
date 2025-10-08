'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Common/Navbar';
import AddFoodModal from '@/app/components/Modals/Modal';

export default function DashboardPage() {
  const [foodLog, setFoodLog] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    food: '',
    serving: '',
    calories: '',
    time: '',
  });

  const data = []

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
                <th className="pb-2">Grams</th>
                <th className="pb-2">Calories</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx !== data.length - 1 ? 'border-b' : ''}
                >
                  <td className="py-2">{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.is_public}</td>
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
