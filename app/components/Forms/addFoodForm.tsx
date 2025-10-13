'use client';

type Entry = {
  food: string;
  serving: string;
  calories: string;
  mealType: string;
  isPublic: '' | 'yes' | 'no';
};

export default function AddFoodForm({
  form,
  onChange,
  onSubmit,
  onCancel,
}: {
  form: Entry;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        className="border rounded px-3 py-2"
        name="food"
        placeholder="Food"
        value={form.food}
        onChange={onChange}
        required
      />
      <input
        className="border rounded px-3 py-2"
        name="serving"
        placeholder="Serving Size"
        value={form.serving}
        onChange={onChange}
        required
      />
      <input
        className="border rounded px-3 py-2"
        name="calories"
        placeholder="Calories"
        value={form.calories}
        onChange={onChange}
        required
      />
      <select
        className="border rounded px-3 py-2"
        name="mealType"
        value={form.mealType}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Select Meal Type
        </option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snack</option>
      </select>
      <select
        className="border rounded px-3 py-2"
        name="isPublic"
        value={form.isPublic}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Is it public?
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div className="flex gap-2 justify-end mt-2">
        <button
          type="button"
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={onCancel}
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
  );
}
