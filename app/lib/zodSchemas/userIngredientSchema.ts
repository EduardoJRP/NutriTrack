import { z } from 'zod';

export const userIngredientSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Ingredient name is required'),
  quantity: z.preprocess(
    (val) => (val === '' || val === null || val === undefined ? undefined : Number(val)),
    z.number().min(0, 'Ingredient cannot be empty')
  ),
  isLiquid: z.boolean(),
});

export type UserIngredientType = z.infer<typeof userIngredientSchema>;
export type UserIngredientInput = z.input<typeof userIngredientSchema>;