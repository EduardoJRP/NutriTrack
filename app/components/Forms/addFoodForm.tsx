'use client';

type Entry = {
  food: string;
  serving: string;
  calories: string;
  time: string;
};

export default function AddFoodForm({
  form,
  onChange,
  onSubmit,
  onCancel,
}: {
  form: Entry;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      <input
        className="border rounded px-3 py-2"
        name="time"
        placeholder="Time"
        value={form.time}
        onChange={onChange}
        required
      />

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
