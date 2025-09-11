import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">NutriTrack</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-green-600 cursor-pointer">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer">
          <Link href="/recipes">Recipes</Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer"><Link href="/intakeLog">Intake Log</Link></li>
        <li className="hover:text-green-600 cursor-pointer"><Link href="/profile">Profile</Link></li>
        <li className="hover:text-green-600 cursor-pointer"><Link href="/help">Help</Link></li>
      </ul>
    </nav>
  );
}
