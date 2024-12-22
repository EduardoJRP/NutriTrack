import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import UpdateModal from './Modals/UpdateItemModal';
import { ItemData } from '../types/item';

export default function ItemList() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<ItemData | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('/api/getList');
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

  const handleUpdate = async (id: number) => {
    const item = items.find((item) => item.id === id) || null; // Convert undefined to null
    setCurrentItem(item);
    if (item) {
      setModalOpen(true);
    } else {
      console.error('Item not found.');
    }
  };

  const handleModalUpdate = async (updatedItem: ItemData) => {
    if (updatedItem) {
      try {
        const response = await fetch(`/api/updateItem/${updatedItem.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: updatedItem.name,
            quantity: updatedItem.quantity,
            calories: updatedItem.calories,
            carbohydrates: updatedItem.carbohydrates,
            fats: updatedItem.fats,
            proteins: updatedItem.proteins,
          }),
        });

        const data = await response.json();
        if (data.success) {
          // Update the item in the list after the API response
          setItems((prevItems) =>
            prevItems.map((item) =>
              item.id === updatedItem.id ? updatedItem : item
            )
          );
          setModalOpen(false);
          alert('Item updated successfully!');
        } else {
          console.error('Failed to update item:', data.error);
          alert('Failed to update item.');
        }
      } catch (error) {
        console.error('Error updating item:', error);
        alert('An error occurred while updating the item.');
      }
    }
  };
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
      {currentItem && (
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false) 
            setCurrentItem(null)
          }}
          item={currentItem}
          onUpdate={handleModalUpdate}
        />
      )}
    </div>
  );
}
