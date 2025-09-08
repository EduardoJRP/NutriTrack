"use client";

export default function TodaysLogPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">FitTrack</h1>
        <ul className="flex gap-6 text-gray-600">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="text-green-600 font-semibold cursor-default">Dashboard</li>
          <li className="hover:text-green-600 cursor-pointer">Recipes</li>
          <li className="hover:text-green-600 cursor-pointer">Community</li>
        </ul>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-bold">Today&apos;s Log</h2>
        <p className="mt-1 text-gray-600">
          Track your meals and snacks for a healthier you.
        </p>

        <div className="mt-8 grid gap-6">
          {/* Breakfast */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Breakfast</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Oatmeal with Berries</span>
                <span className="font-medium">250 kcal</span>
              </li>
              <li className="flex justify-between">
                <span>Green Smoothie</span>
                <span className="font-medium">150 kcal</span>
              </li>
            </ul>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
              Add Breakfast
            </button>
          </section>

          {/* Lunch */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Lunch</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Chicken Salad Sandwich</span>
                <span className="font-medium">400 kcal</span>
              </li>
              <li className="flex justify-between">
                <span>Apple Slices</span>
                <span className="font-medium">100 kcal</span>
              </li>
            </ul>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
              Add Lunch
            </button>
          </section>

          {/* Dinner */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Dinner</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Salmon with Roasted Vegetables</span>
                <span className="font-medium">550 kcal</span>
              </li>
            </ul>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
              Add Dinner
            </button>
          </section>

          {/* Snacks */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Snacks</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Almonds</span>
                <span className="font-medium">100 kcal</span>
              </li>
              <li className="flex justify-between">
                <span>Yogurt</span>
                <span className="font-medium">80 kcal</span>
              </li>
            </ul>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
              Add Snack
            </button>
          </section>
        </div>

        {/* Daily Goal */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <p className="text-gray-700 font-medium">
            Daily Calorie Goal <span className="font-bold">1500 / 2000 kcal</span>
          </p>
          <div className="mt-3 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
