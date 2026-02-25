import { createClient } from '../../lib/supabase/client';
import { recipeSchema } from '../../lib/zodSchemas/recipeSchema';

export async function saveRecipe(data: unknown) {
  const parsed = recipeSchema.safeParse(data);

  console.log('Parsed data:', parsed);

  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten() };
  }

  const { name, mealType, isPublic, servings, ingredients } = parsed.data;


  const { data: result, error } = await createClient().rpc(
    'save_recipe',
    {
      _name: name,
      _meal_type: mealType,
      _is_public: isPublic,
      _servings: servings,
      _ingredients: ingredients,
    }
  );

  if (error) {
    return { success: false, error: { message: error.message } };
  }

  return { success: true, recipeId: result };
}
