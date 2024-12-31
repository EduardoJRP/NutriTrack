'use client';

import NavBar from '../components/Common/NavBar';
import ItemList from '../components/ItemList/ItemList';

export default function AddItem() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-grow items-center justify-center w-full">
        <ItemList></ItemList>
      </div>
    </div>
  );
}
