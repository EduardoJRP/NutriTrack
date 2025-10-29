'use client';

import Navbar from '@/app/components/Common/Navbar';
import IngredientModal from '@/app/components/Modals/ingredientModal';

import { saveIngredient } from '@/app/lib/actions/saveIngredient';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  ingredientSchema,
  IngredientFormData,
} from '@/app/lib/zodSchemas/newIngredient';
import {
  userIngredientType,
} from '@/app/lib/zodSchemas/userIngredientSchema';

export default function NewRecipePage() {
  const fetchIngredients = async () => {
    try {
      const res = await fetch('/api/ingredients');
      const data = await res.json();
      if (data.success) {
        setIngredients(data.ingredients);
      } else {
        console.error('Error fetching ingredients:', data.error);
      }
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  const [form, setForm] = useState({
    food: '',
    mealType: '',
    isPublic: '',
    servings: 0,
  });

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState<userIngredientType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    userIngredientType[]
  >([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IngredientFormData>({
    resolver: zodResolver(ingredientSchema),
  });

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleIngredient = (item: userIngredientType) => {
    setSelectedIngredients((prev) =>
      prev.some((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item]
    );
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClearAll = () => {
    setSelectedIngredients([]);
  };

  const handleSaveIngredient = async (data: IngredientFormData) => {
    const result = await saveIngredient(data);

    if (!result.success) {
      console.error(result.error);
      alert('Failed to save ingredient. Please check your input.');
      return;
    }

    await fetchIngredients();

    reset();
    setShowModal(false);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <>
      <Navbar />

      <header className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold">New Recipe</h1>
        <p className="mt-2 text-gray-600">
          What healthy recipe would you like to add?
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* TODO: Image needs fixing */}
        <div className="h-60 w-full bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 rounded-xl" />

        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <label className="block font-medium">Recipe Name</label>
              <input
                className="border rounded px-3 py-2"
                name="food"
                placeholder="My Healthy Recipe"
                value={form.food}
                onChange={onChange}
                required
              />

              <label className="block font-medium">Meal Type</label>
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
                <option value="snack">Snack</option>
              </select>
            </div>

            <div className="flex flex-col gap-4">
              <label className="block font-medium">How many servings?</label>
              <input
                className="border rounded px-3 py-2"
                name="servings"
                type="number"
                placeholder="e.g. 2"
                value={form.servings}
                onChange={onChange}
                required
              />

              <label className="block font-medium">Is it public?</label>
              <select
                className="border rounded px-3 py-2"
                name="isPublic"
                value={form.isPublic}
                onChange={onChange}
                required
              >
                <option value="" disabled>
                  Select One
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* 🧂 Ingredient Search + Selection */}
          <div className="mt-10">
            <label className="text-lg font-semibold mb-3">
              Select Ingredients
            </label>

            <input
              type="text"
              placeholder="Search ingredients..."
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-green-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex justify-end gap-3 mb-3">
              <button
                type="button"
                onClick={handleClearAll}
                className="px-3 py-1 rounded bg-gray-200 text-sm hover:bg-gray-300"
              >
                Clear
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {filteredIngredients.map((ingredient) => (
                <label key={ingredient.name} className="...">
                  <input
                    type="checkbox"
                    checked={selectedIngredients.some(
                      (i) => i.name === ingredient.name
                    )}
                    onChange={() => toggleIngredient(ingredient)}
                    className="h-4 w-4 accent-green-600"
                  />
                  <span className="text-sm text-gray-700">
                    {ingredient.name}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Not seeing the ingredient you&apos;re looking for?{' '}
              <span
                role="button"
                tabIndex={0}
                onClick={() => setShowModal(true)}
                onKeyDown={(e) => e.key === 'Enter' && setShowModal(true)}
                className="text-blue-500 underline cursor-pointer hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                Add it here
              </span>
              .
            </div>
          </div>
        </form>
      </main>

      <IngredientModal
        isOpen={showModal}
        onSubmit={handleSaveIngredient}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        errors={errors}
      />
    </>
  );
}
