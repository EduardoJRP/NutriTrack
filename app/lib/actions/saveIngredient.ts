import { supabase } from '../supabaseClient';
import { ingredientSchema } from '../zodSchemas/newIngredient';

export async function saveIngredient(data: unknown) {
  const parsed = ingredientSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten(),
    };
  }

  const {
    name,
    quantityGrams,
    calories,
    carbohydrates,
    proteins,
    fats,
  } = parsed.data;

  // ✅ Normalize to 100g base
  const multiplier = 100 / quantityGrams;

  const normalized = {
  name,
  calories: Number((calories * multiplier).toFixed(2)),
  carbohydrates: Number((carbohydrates * multiplier).toFixed(2)),
  proteins: Number((proteins * multiplier).toFixed(2)),
  fats: Number((fats * multiplier).toFixed(2)),
};


  const information = supabase;

  const { error } = await information.from('ingredients').insert(normalized);

  if (error) {
    return {
      success: false,
      error: { message: error.message },
    };
  }

  return { success: true };
}