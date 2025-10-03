import { supabaseServer } from '@/app/lib/supabaseServer';
import { FoodTable } from '@/app/types/foodTable';

// Fetch list of foods
export default async function FoodsTableList() {
  const { data, error } = await supabaseServer
    .from('foods')
    .select('*')
    .returns<FoodTable[]>();
  if (error) throw new Error(error.message);

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="pb-2">Food</th>
          <th className="pb-2">Grams</th>
          <th className="pb-2">Calories</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className={idx !== data.length - 1 ? 'border-b' : ''}>
            <td className="py-2">{item.name}</td>
            <td>{item.id}</td>
            <td>{item.is_public}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
