export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">NutriTrack</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
        <li className="hover:text-green-600 cursor-pointer">Food</li>
        <li className="hover:text-green-600 cursor-pointer">Exercises</li>
        <li className="hover:text-green-600 cursor-pointer">Recipes</li>
        <li className="hover:text-green-600 cursor-pointer">Community</li>
      </ul>
    </nav>
  );
}
