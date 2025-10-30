import { supabase } from '../supabaseClient';
import { recipeSchema } from '../zodSchemas/recipeSchema';

export async function saveRecipe(data: unknown) {
  const parsed = recipeSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten() };
  }

  const { name, mealType, isPublic, servings, ingredients } = parsed.data;
  const ingredientIds = ingredients.map((ingredient) => ingredient.id);

  const { data: result, error } = await supabase.rpc('save_recipe_with_ingredients', {
    _name: name,
    _meal_type: mealType,
    _is_public: isPublic,
    _servings: servings,
    _ingredient_ids: ingredientIds,
  });

  if (error) {
    return { success: false, error: { message: error.message } };
  }

  return { success: true, recipeId: result };
}
