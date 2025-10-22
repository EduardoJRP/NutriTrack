import { z } from 'zod';

export const ingredientSchema = z.object({
  name: z.string().min(1, 'Ingredient name is required'),

  // Local-only field — not persisted
  quantityGrams: z.preprocess(
    (val) => Number(val),
    z.number().min(1, 'Must be at least 1g')
  ),

  // Floats — coerced and validated
  calories: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Calories must be a number >= 0')
  ),
  carbohydrates: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Carbohydrates must be a number >= 0')
  ),
  proteins: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Proteins must be a number >= 0')
  ),
  fats: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Fats must be a number >= 0')
  ),
});

export type IngredientFormData = z.infer<typeof ingredientSchema>;
