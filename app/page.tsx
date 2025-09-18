'use client';

import { useState } from 'react';
// Update the import path to match the actual location and casing of Navbar
import Navbar from '@/app/components/Common/Navbar';

// external data constant
const FOOD_LOG = [
	{
		food: 'Avocado Toast',
		serving: '2 slices',
		calories: '350 kcal',
		time: '8:00 AM',
	},
	{
		food: 'Chicken Salad',
		serving: '1 cup',
		calories: '450 kcal',
		time: '12:30 PM',
	},
	{
		food: 'Salmon with Vegetables',
		serving: '1 fillet',
		calories: '600 kcal',
		time: '7:00 PM',
	},
];

export default function DashboardPage() {
	// use a stateful log initialized from the external const
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

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
					<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
						<h3 className="text-lg font-semibold mb-4">Add Food Entry</h3>
						<form onSubmit={handleSubmit} className="flex flex-col gap-3">
							<input
								className="border rounded px-3 py-2"
								name="food"
								placeholder="Food"
								value={form.food}
								onChange={handleChange}
								required
							/>
							<input
								className="border rounded px-3 py-2"
								name="serving"
								placeholder="Serving Size"
								value={form.serving}
								onChange={handleChange}
								required
							/>
							<input
								className="border rounded px-3 py-2"
								name="calories"
								placeholder="Calories"
								value={form.calories}
								onChange={handleChange}
								required
							/>
							<input
								className="border rounded px-3 py-2"
								name="time"
								placeholder="Time"
								value={form.time}
								onChange={handleChange}
								required
							/>
							<div className="flex gap-2 justify-end mt-2">
								<button
									type="button"
									className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
									onClick={() => setShowModal(false)}
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

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
							{foodLog.map((item, idx) => (
								<tr
									key={idx}
									className={idx !== foodLog.length - 1 ? 'border-b' : ''}
								>
									<td className="py-2">{item.food}</td>
									<td>{item.serving}</td>
									<td>{item.calories}</td>
									<td>{item.time}</td>
								</tr>
							))}
						</tbody>
					</table>

					{/* Buttons */}
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
