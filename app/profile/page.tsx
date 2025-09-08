"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Sophia Carter");
  const [email, setEmail] = useState("sophia.carter@email.com");
  const [phone, setPhone] = useState("");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your API
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar (same style as other pages) */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-green-600">
            NutriTrack
          </span>
          <ul className="hidden sm:flex items-center gap-6 text-gray-600">
            <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-green-600 cursor-pointer">Food</li>
            <li className="hover:text-green-600 cursor-pointer">Exercises</li>
            <li className="hover:text-green-600 cursor-pointer">Recipes</li>
            <li className="hover:text-green-600 cursor-pointer">Community</li>
          </ul>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Page title */}
        <header>
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        </header>

        <form onSubmit={onSubmit} className="mt-8 grid gap-6">
          {/* Personal Information */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold">Personal Information</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
                />
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold">Preferences</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Units</label>
                <select
                  value={units}
                  onChange={(e) => setUnits(e.target.value as "metric" | "imperial")}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
                >
                  <option value="metric">Metric (kg, cm)</option>
                  <option value="imperial">Imperial (lb, in)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </section>

          {/* App Settings */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold">App Settings</h2>

            <div className="mt-4 flex items-start justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div>
                <p className="font-medium text-gray-800">Notifications</p>
                <p className="text-sm text-gray-600">
                  Enable notifications for daily reminders and updates.
                </p>
              </div>

              <label className="inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="peer sr-only"
                />
                {/* custom toggle */}
                <span className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-green-500 relative">
                  <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
                </span>
              </label>
            </div>
          </section>

          {/* Subscription */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold">Subscription</h2>
            <p className="mt-2 text-sm text-gray-600">
              Manage your subscription plan and billing details.
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
              >
                Manage
              </button>
            </div>
          </section>

          {/* About NutriTrack */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold">About NutriTrack</h2>
            <p className="mt-2 text-sm text-gray-600">
              Learn more about the app and its features.
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
              >
                View
              </button>
            </div>
          </section>

          {/* Save Changes */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-5 py-2.5 text-white hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
