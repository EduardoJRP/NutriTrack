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
import { userIngredientType } from '@/app/lib/zodSchemas/userIngredientSchema';
import { recipeSchema, recipeType } from '@/app/lib/zodSchemas/recipeSchema';
import { saveRecipe } from '@/app/lib/actions/saveRecipe';

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

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState<userIngredientType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    userIngredientType[]
  >([]);

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IngredientFormData>({
    resolver: zodResolver(ingredientSchema),
  });

  const {
    register: registerRecipe,
    handleSubmit: handleSubmitRecipe,
    reset: resetRecipe,
    formState: { errors: recipeErrors },
  } = useForm<recipeType>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      name: '',
      mealType: '',
      isPublic: false,
      servings: 1,
      ingredients: [],
    },
  });

  const toggleIngredient = (item: userIngredientType) => {
    setSelectedIngredients((prev) =>
      prev.some((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item]
    );
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

  const handleSaveRecipe = async (data: recipeType) => {
    const recipeData = {
      ...data,
      ingredients: selectedIngredients,
    };

    const result = await saveRecipe(recipeData);

    if (!result.success) {
      console.error(result.error);
      alert('Failed to save recipe. Please check your input.');
      return;
    }

    resetRecipe();
    setSelectedIngredients([]);
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

        <form className="mt-6" onSubmit={handleSubmitRecipe(handleSaveRecipe)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <label className="block font-medium">Recipe Name</label>
              <input
                className="border rounded px-3 py-2"
                placeholder="My Healthy Recipe"
                {...registerRecipe('name')}
                required
              />
              {recipeErrors.name && (
                <p className="error">{recipeErrors.name.message}</p>
              )}
              <label className="block font-medium">Meal Type</label>
              <select
                className="border rounded px-3 py-2"
                {...registerRecipe('mealType')}
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
              {recipeErrors.mealType && (
                <p className="error">{recipeErrors.mealType.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <label className="block font-medium">How many servings?</label>
              <input
                className="border rounded px-3 py-2"
                type="number"
                placeholder="e.g. 2"
                {...registerRecipe('servings')}
                required
              />
              {recipeErrors.servings && (
                <p className="error">{recipeErrors.servings.message}</p>
              )}

              <label className="block font-medium">Is it public?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="true"
                    {...registerRecipe('isPublic', {
                      setValueAs: (v) => v === 'true',
                    })}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="false"
                    {...registerRecipe('isPublic', {
                      setValueAs: (v) => v === 'true',
                    })}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Ingredient Search + Selection */}
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
            <div>
              {search.length > 0 ? (
                // Show filtered ingredients
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {filteredIngredients.map((ingredient) => (
                    <label
                      key={ingredient.name}
                      className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
                    >
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
              ) : selectedIngredients.length > 0 ? (
                // Show selected ingredients when search is empty
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedIngredients.map((ingredient) => (
                    <label
                      key={ingredient.name}
                      className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        onChange={() => toggleIngredient(ingredient)}
                        className="h-4 w-4 accent-green-600"
                      />
                      <span className="text-sm text-gray-700">
                        {ingredient.name}
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                // Default message
                <div className="text-gray-500 mt-4">
                  Type in the search bar the ingredient you are looking for.
                </div>
              )}

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
          </div>
          <div className="mt-8 flex gap-4 justify-end">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              type="submit"
            >
              save
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              type="button"
              onClick={() => {
                resetRecipe();
                setSelectedIngredients([]);
              }}
            >
              cancel
            </button>
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
