import { z } from 'zod';

export const tableFoodSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Food name is required'),
  created_by: z.string().min(1, 'Created by is required'),
  servings: z.number().min(0, 'Servings cannot be negative'),
  calories: z.number().min(0, 'Calories cannot be negative'),
});

export type TableFoodType = z.infer<typeof tableFoodSchema>;
export type TableFoodInput = z.input<typeof tableFoodSchema>;