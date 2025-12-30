'use client';

import Navbar from '@/app/components/Common/Navbar';
import { Food } from '@/app/types/foodTable';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [recentFoods, setRecentFoods] = useState<Food[]>([]);

  const fetchRecentFoods = async () => {
    try {
      const response = await fetch('/api/foods');
      const data = await response.json();

      if (data.success) {
        setRecentFoods(data.foods);
      } else {
        console.error('Failed to fetch recent foods');
      }
    } catch (error) {
      console.error('Error fetching recent foods:', error);
    }
  };

  useEffect(() => {
    fetchRecentFoods();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Recent Foods */}
        <section className="space-y-3">
          <h1 className="text-2xl font-bold">Good morning, User</h1>
          <h2 className="text-lg font-semibold text-gray-700">
            Here are your recent foods
          </h2>

          <div className="bg-white border rounded-lg overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-100 text-sm">
                <tr>
                  <th className="p-3 text-left">Food</th>
                  <th className="p-3 text-left">Serving</th>
                  <th className="p-3 text-left">Calories</th>
                  <th className="p-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {recentFoods.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">
                      No recent foods yet
                    </td>
                  </tr>
                ) : (
                  recentFoods.map((food) => (
                    <tr key={food.id} className="hover:bg-gray-50">
                      <td className="p-3">{food.name}</td>
                      <td className="p-3">{food.servings}</td>
                      <td className="p-3">{food.calories}</td>
                      <td className="p-3 capitalize">{food.meal_type}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Daily Log */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Daily Log</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal) => (
              <div
                key={meal}
                className="flex flex-col justify-between border rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold">{meal}</h3>
                  <p className="text-sm text-gray-500 mt-1">1000 kcal</p>
                </div>

                <div className="mt-4 flex items-center justify-center bg-gray-100 border-2 border-dashed rounded-lg h-28 text-sm text-gray-400">
                  Food image
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
