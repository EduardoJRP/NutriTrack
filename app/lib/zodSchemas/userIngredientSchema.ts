import {z} from 'zod';

export const userIngredientSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Ingredient name is required'),
  quantity: z.preprocess((val) => Number(val), z.number().min(0, 'Ingredient cannot be empty')
  ),
});

export type userIngredientType = z.infer<typeof userIngredientSchema>