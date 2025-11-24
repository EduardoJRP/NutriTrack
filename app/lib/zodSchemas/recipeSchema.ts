import { z } from 'zod';
import { userIngredientSchema } from './userIngredientSchema';

export const recipeSchema = z.object({
  name: z.string().min(1, 'Recipe name is required'),
  mealType: z.enum(['breakfast', 'lunch', 'dinner', 'snack'])
    .or(z.literal(''))
    .refine((val) => val !== '', {message: 'Mealtype is required'}),
  isPublic: z.boolean(),
  servings: z.preprocess(
    (val) => Number(val),
    z.number().min(1, 'Servings must be a number >= 0')
  ),
  ingredients: z.array(userIngredientSchema).min(1, 'At least one ingredient is required'),
});

export type RecipeType = z.infer<typeof recipeSchema>
export type RecipeInput = z.input<typeof recipeSchema>;