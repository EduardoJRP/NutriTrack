export type Food = {
    id: number;
    created_at: string;
    name: string;
    created_by: string;
    is_public: boolean;
    servings: string;
    meal_type: string;
}

export type NewFoodInput = {
  food: string;
  serving: string;
  calories: string;
  mealType: string;
  isPublic: '' | 'yes' | 'no';
};