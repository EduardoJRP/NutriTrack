'use client';

import Navbar from '@/app/components/Common/Navbar';

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Main content */}
      <main className="p-8 grid gap-8 md:grid-cols-1">
        {/* TODO: Daily Caloric Intake, Goal*/}

        {/* Food Log */}
      </main>
    </div>
  );
}
