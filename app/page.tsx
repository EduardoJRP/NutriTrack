'use client';

import Navbar from '@/app/components/Common/Navbar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Main content */}
      <main className="p-8 grid gap-8 md:grid-cols-1">
        <div>
          <h1>Good morning *user*</h1>
          <h2>Here are your recent foods</h2>
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Serving</th>
                <th>Calories</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ex 1</td>
                <td>3</td>
                <td>100</td>
                <td>Breakfast</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Daily Log */}
        <div>
          <div>
            <h3>Breakfast</h3>
            <div>Image</div>
            <div>1000</div>
          </div>

          <div>
            <h3>Breakfast</h3>
            <div>Image</div>
            <div>1000</div>
          </div>

          <div>
            <h3>Breakfast</h3>
            <div>Image</div>
            <div>1000</div>
          </div>

          <div>
            <h3>Breakfast</h3>
            <div>Image</div>
            <div>1000</div>
          </div>
        </div>
      </main>
    </div>
  );
}
