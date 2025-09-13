import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link className="flex items-center gap-2" href="/">
        <Image src="/logo.png" alt="NutriTrack Logo" width={40} height={40} />
        <h1 className="text-xl font-bold text-green-600">NutriTrack</h1>
      </Link>
      <div>
        <ul className="flex gap-6 text-gray-600">
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/recipes">Recipes</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/intakeLog">Intake Log</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/help">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
