import { supabaseServer } from '@/app/lib/supabaseServer';

export type FoodWithTotals = {
  food_name: string;
  total_grams: number;
  total_cals: number;
};

export default async function getFoodsWithTotals(): Promise<FoodWithTotals[]> {
  const { data, error } = await supabaseServer
    .rpc('get_foods_with_totals'); // ← use a Postgres function (see below)

  if (error) throw new Error(error.message);
  return data as FoodWithTotals[];
}
