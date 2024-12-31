'use client';

import NavBar from '../components/Common/NavBar';
import AddItemForm from '../components/AddItem/AddItemForm';

export default function AddItem() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-grow items-center justify-center w-full">
        <AddItemForm></AddItemForm>
      </div>
    </div>
  );
}
