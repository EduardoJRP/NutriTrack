import { supabaseServer } from '../supabaseServer';
import { userIngredientSchema } from '../zodSchemas/userIngredientSchema'

export async function fetchUserIngredient() {
  const { data, error } = await supabaseServer.from('ingredients').select('id, name, isLiquid');

  if (error) {
    return {
      success: false,
      error: { message: error.message},
    };
  }

  const enrichedData = data.map((item) => ({...item, quantity: 0,}))

  const parsedData = enrichedData.map((item) => {
    const parsed = userIngredientSchema.safeParse(item);
    return parsed.success ? parsed.data : null;
  }).filter(Boolean);

  return {
    success: true,
    ingredients: parsedData,
  }
}