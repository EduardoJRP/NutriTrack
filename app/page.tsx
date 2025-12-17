'use client';

import Navbar from '@/app/components/Common/Navbar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Main content */}
      <main className="p-8 grid gap-8 md:grid-cols-1">
        <div className="flex flex-col bg-gray-50 text-gray-800">
          <h1 className="text-2xl font-bold">Good morning *user*</h1>
          <h2 className="text-lg font-semibold">Here are your recent foods</h2>
          <table className="w-full mt-4 table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="border-b">
                <th className="p-2">Food</th>
                <th className="p-2">Serving</th>
                <th className="p-2">Calories</th>
                <th className="p-2">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="p-2">Ex 1</td>
                <td className="p-2">3</td>
                <td className="p-2">100</td>
                <td className="p-2">Breakfast</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Daily Log */}
        <div className="flex flex-row bg-gray-50 text-gray-800 border rounded-lg p-4 md:grid-cols-1">
          <div className="flex p-4">
            <div className="flex flex-col m-4">
              <h3 className="text-lg font-semibold">Breakfast</h3>
              <div className="p-2">1000</div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 m-4"></div>
          </div>
          <div className="flex p-4">
            <div className="flex flex-col m-4">
              <h3 className="text-lg font-semibold">Lunch</h3>
              <div className="p-2">1000</div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 m-4"></div>
          </div>

          <div className="flex p-4">
            <div className="flex flex-col m-4">
              <h3 className="text-lg font-semibold">Dinner</h3>
              <div className="p-2">1000</div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 m-4"></div>
          </div>

          <div className="flex p-4">
            <div className="flex flex-col m-4">
              <h3 className="text-lg font-semibold">Snack</h3>
              <div className="p-2">1000</div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 m-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
