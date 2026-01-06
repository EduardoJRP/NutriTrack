import { supabaseServer } from '../supabaseServer';

export async function fetchTableFoods() {
  const { data, error } = await supabaseServer.rpc('get_foods_with_calories');

  if (error) {
    return {
      success: false,
      error: { message: error.message },
    };
  }

  return {
    success: true,
    foods: data,
  };
}
