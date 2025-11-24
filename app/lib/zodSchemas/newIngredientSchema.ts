import { z } from 'zod';

export const newIngredientSchema = z.object({
  name: z.string().min(1, 'Ingredient name is required'),
  isLiquid: z.boolean().optional(),

  quantity: z.coerce.number().min(1, 'Must be at least 1g'),
  measurement: z.enum(['g', 'lt'], { message: 'Measurement is required' }),

  calories: z.coerce.number().min(0, 'Calories must be a number >= 0'),
  carbohydrates: z.coerce
    .number()
    .min(0, 'Carbohydrates must be a number >= 0'),
  proteins: z.coerce.number().min(0, 'Proteins must be a number >= 0'),
  fats: z.coerce.number().min(0, 'Fats must be a number >= 0'),
});

export type NewIngredientType = z.infer<typeof newIngredientSchema>;
export type NewIngredientInput = z.input<typeof newIngredientSchema>;
