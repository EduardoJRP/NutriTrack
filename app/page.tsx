'use client';

// Update the import path to match the actual location and casing of Navbar
import Navbar from '@/app/components/Common/Navbar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      
      {/* Main content */}
      <main className="p-8 grid gap-8 md:grid-cols-1">
        {/* Progress Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Today&apos;s Progress</h2>
          <p className="text-gray-500 mb-6">
            Track your daily calorie intake and stay on top of your health
            goals.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-red-500">1850</p>
              <p className="text-sm text-gray-500">Calories Consumed</p>
              <p className="text-xs text-red-400">-15%</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">2200</p>
              <p className="text-sm text-gray-500">Daily Goal</p>
              <p className="text-xs text-green-400">+10%</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-500">350</p>
              <p className="text-sm text-gray-500">Remaining</p>
              <p className="text-xs text-yellow-400">+20%</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-1">
              Daily Calorie Intake 84%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: '84%' }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">1850 / 2200 kcal</p>
          </div>
        </div>

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
              <tr className="border-b">
                <td className="py-2">Avocado Toast</td>
                <td>2 slices</td>
                <td>350 kcal</td>
                <td>8:00 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Chicken Salad</td>
                <td>1 cup</td>
                <td>450 kcal</td>
                <td>12:30 PM</td>
              </tr>
              <tr>
                <td className="py-2">Salmon with Vegetables</td>
                <td>1 fillet</td>
                <td>600 kcal</td>
                <td>7:00 PM</td>
              </tr>
            </tbody>
          </table>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2">
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
