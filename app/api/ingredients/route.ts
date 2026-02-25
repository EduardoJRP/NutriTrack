import { NextResponse } from 'next/server';
import { createClient } from '@/app/lib/supabase/server';
import { userIngredientSchema } from '@/app/lib/zodSchemas/userIngredientSchema';

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('ingredients')
    .select('id, name, isLiquid');

  if (error) {
    // respond with a 500 so callers can detect failure
    return NextResponse.json(
      { success: false, error: { message: error.message } },
      { status: 500 }
    );
  }

  // supabase may return `null` when the table is empty; use an empty array
  const items = data ?? [];
  const enrichedData = items.map((item) => ({ ...item, quantity: 0 }));

  const parsedData = enrichedData
    .map((item) => {
      const parsed = userIngredientSchema.safeParse(item);
      return parsed.success ? parsed.data : null;
    })
    .filter(Boolean);

  return NextResponse.json({ success: true, ingredients: parsedData });
}
