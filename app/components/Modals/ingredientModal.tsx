'use client';

import IngredientForm from '../Forms/ingredientsForm';
import { IngredientModalProps } from 'app/types/ingredients';

export default function IngredientModal({
  isOpen,
  onSubmit,
  onClose,
  register,
  handleSubmit,
  reset,
  errors,
}: IngredientModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add New Ingredient</h2>
        <IngredientForm
          onSubmit={onSubmit}
          onClose={onClose}
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          errors={errors}
        />
      </div>
    </div>
  );
}