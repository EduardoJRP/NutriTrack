"use client";

import NavBar from "../components/NavBar";
import AddItemForm from "../components/AddItemForm";

export default function AddItem() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-grow items-center justify-center">
        <AddItemForm></AddItemForm>
      </div>
    </div>
  )
}
