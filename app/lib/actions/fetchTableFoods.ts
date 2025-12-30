import { supabaseServer } from '../supabaseServer';
import { userIngredientSchema } from 'tableFoodsSchema';

export async function fetchTableFoods() {
    const { data, error } = await supabaseServer.from('foods').select('id, name, servings, meal_type');

    if (error) {
        return {
            success: false,
            error: { message: error.message },
        };
    }

    /* Add a specific function for getting calories for the food required */
}
