import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex flex-row items-center bg-orange-400 justify-around p-4">
      <Link href="/">
        <div className="flex flex-row items-center">
          <Image
            src={'/gato.jpg'}
            alt={'Logo of the app'}
            width={50}
            height={30}
          />
          <h1 className="ml-2">Calories Cat</h1>
        </div>
      </Link>
      <div>
        <div className="flex flex-row space-x-4">
          <Link href="/addItem">
            <button className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </Link>
          <Link href="/itemList">
            <button className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
