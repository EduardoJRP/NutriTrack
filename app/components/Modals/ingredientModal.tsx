'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newIngredientSchema, NewIngredientInput } from "@/app/lib/zodSchemas/newIngredientSchema";
import { useEffect } from "react";

interface IngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewIngredientInput) => void;
  defaultValues?: Partial<NewIngredientInput>;
}

export default function IngredientModal({
  isOpen,
  onClose,
  onSubmit,
  defaultValues
}: IngredientModalProps) {
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<NewIngredientInput>({
  resolver: zodResolver(newIngredientSchema),
  defaultValues: {},
});


  useEffect(() => {
    if (isOpen) reset(defaultValues);
  }, [isOpen, defaultValues, reset])
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add New Ingredient</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input
              {...register('name')}
              placeholder="Name"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
            <div>
              <input
                type="number"
                step="0.01"
                {...register('quantity', { valueAsNumber: true })}
                placeholder="Quantity"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              {errors.quantity && <p className="error">{errors.quantity.message}</p>}
              <select {...register('measurement')}>
                <option value="" disabled hidden>
                  Select a measurement
                </option>
                <option value="g">g</option>
                <option value="lt">lt</option>
              </select>
              {errors.measurement && (
                <p className="error">{errors.measurement.message}</p>
              )}
            </div>
            <input
              type="number"
              step="0.01"
              {...register('calories', { valueAsNumber: true })}
              placeholder="Calories"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.calories && <p className="error">{errors.calories.message}</p>}
            <input
              type="number"
              step="0.01"
              {...register('carbohydrates', { valueAsNumber: true })}
              placeholder="Carbohydrates"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.carbohydrates && (
              <p className="error">{errors.carbohydrates.message}</p>
            )}
            <input
              type="number"
              step="0.01"
              {...register('proteins', { valueAsNumber: true })}
              placeholder="Proteins"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.proteins && <p className="error">{errors.proteins.message}</p>}
            <input
              type="number"
              step="0.01"
              {...register('fats', { valueAsNumber: true })}
              placeholder="Fats"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.fats && <p className="error">{errors.fats.message}</p>}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => {
                  reset();
                  onClose();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}