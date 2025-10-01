// app/foods/page.tsx
import { supabaseServer } from "@/app/lib/supabaseServer";

// Fetch list of foods
export default async function FoodsPage() {
  const { data, error } = await supabaseServer.from("foods").select("*");
  if (error) throw new Error(error.message);

  return data;
}
