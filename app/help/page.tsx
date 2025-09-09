// app/help/page.tsx (Next.js App Router)
// or src/pages/help.tsx for CRA/Vite projects

"use client";

import { useState } from "react";

export default function HelpPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Go to Settings > Account > Reset Password, and follow the instructions.",
    },
    {
      q: "Can I change my calorie goals?",
      a: "Yes, you can adjust your goals in the Settings > Preferences section.",
    },
    {
      q: "Is my data secure?",
      a: "We use industry-standard encryption and security measures to protect your data.",
    },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook this up to your API/email service
    alert(`Message sent from ${email}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">NutriTrack</h1>
        <ul className="flex gap-6 text-gray-600">
          <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-green-600 cursor-pointer">Food</li>
          <li className="hover:text-green-600 cursor-pointer">Exercises</li>
          <li className="hover:text-green-600 cursor-pointer">Recipes</li>
          <li className="hover:text-green-600 cursor-pointer">Community</li>
        </ul>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold">Help & Support</h2>
        <p className="mt-1 text-gray-600">
          Find answers to common questions or contact our team.
        </p>

        {/* FAQ */}
        <section className="mt-8 bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
          <ul className="space-y-3">
            {faqs.map((f, i) => (
              <li key={i} className="border-b last:border-0 pb-3">
                <button
                  type="button"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="flex w-full items-center justify-between text-left font-medium text-gray-800"
                >
                  {f.q}
                  <span>{openFAQ === i ? "−" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <p className="mt-2 text-sm text-gray-600">{f.a}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Support */}
        <section className="mt-8 bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-green-300 focus:bg-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-lg bg-green-600 px-5 py-2.5 text-white hover:bg-green-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Resources */}
        <section className="mt-8 bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-green-600 font-medium">
            <li>
              <a href="#" className="hover:underline">
                Guides & Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
