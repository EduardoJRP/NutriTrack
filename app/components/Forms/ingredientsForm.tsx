import { IngredientFormProps } from 'app/types/ingredients';

export default function IngredientForm({
  onSubmit,
  onClose,
  register,
  handleSubmit,
  reset,
  errors,
}: IngredientFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input
        {...register('name')}
        placeholder="Name"
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <input
        type="number"
        step="0.01"
        {...register('quantityGrams', { valueAsNumber: true })}
        placeholder="Quantity (g)"
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
      />
      {errors.quantityGrams && (
        <p className="error">{errors.quantityGrams.message}</p>
      )}

      <input
        type="number"
        step="0.01"
        {...register('calories', { valueAsNumber: true })}
        placeholder="Calories"
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
      />
      {errors.calories && (
        <p className="error">{errors.calories.message}</p>
      )}
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
      {errors.proteins && (
        <p className="error">{errors.proteins.message}</p>
      )}
      <input
        type="number"
        step="0.01"
        {...register('fats', { valueAsNumber: true })}
        placeholder="Fats"
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
      />
      {errors.fats && (
        <p className="error">{errors.fats.message}</p>
      )}

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
  );
}
