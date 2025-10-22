import { z } from 'zod';

export const ingredientSchema = z.object({
  name: z.string().min(1, 'Ingredient name is required'),
  quantityGrams: z
    .number({ message: 'Quantity must be a number' })
    .min(1, 'Must be at least 1g'),
  calories: z.number({ message: 'Calories must be a number' }).min(0),
  carbohydrates: z.number({ message: 'Carbohydrates must be a number' }).min(0),
  proteins: z.number({ message: 'Proteins must be a number' }).min(0),
  fats: z.number({ message: 'Fats must be a number' }).min(0),
});

export type IngredientFormData = z.infer<typeof ingredientSchema>;