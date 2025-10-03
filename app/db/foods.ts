import { supabaseServer } from '@/app/lib/supabaseServer';
import { Food } from '@/app/types/foodTable';

// Fetch list of foods
export default async function getFoods(): Promise<Food[]> {
  const { data, error } = await supabaseServer
    .from('foods')
    .select('*');

  if (error) throw new Error(error.message);

  return data as Food[];
}
