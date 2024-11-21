'use client';

import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';

export default function AddItem() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-grow items-center justify-center w-full">
        <ItemCard></ItemCard>
      </div>
    </div>
  );
}
