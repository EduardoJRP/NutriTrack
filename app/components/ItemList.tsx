import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

interface ItemData {
  name: string;
  id: number;
  quantity: number;
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

export default function ItemList() {
  const [items, setItems] = useState<ItemData[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('/api/submitForm');
        const data = await response.json();
        if (data.success) {
          setItems(data.data);
        } else {
          console.error(`Error fetching items: ${data.error}`);
        }
      } catch (error) {
        console.error(`Network error: ${error}`);
      }
    }
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/deleteItem/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        alert('Item deleted successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to delete item:', errorData);
        alert('Failed to delete the item.');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('An error occurred while deleting the item.');
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          name={item.name}
          id={item.id}
          quantity={item.quantity}
          calories={item.calories}
          carbohydrates={item.carbohydrates}
          proteins={item.proteins}
          fats={item.fats}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
