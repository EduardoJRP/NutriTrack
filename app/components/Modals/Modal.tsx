'use client';

import React from 'react';
import AddFoodForm from '../Forms/addFoodForm';

type Entry = {
  food: string;
  serving: string;
  calories: string;
  mealType: string;
  isPublic: '' | 'yes' | 'no';
};

export default function AddFoodModal({
  form,
  onChange,
  onSubmit,
  onCancel,
}: {
  form: Entry;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Add Food Entry</h3>
        <AddFoodForm
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
}
