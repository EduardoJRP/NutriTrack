import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex flex-row items-center bg-orange-400 place-content-between p-4 ">
      <Link href="/">
        <div className="flex flex-row items-center">
          <Image
            src={'/gato.jpg'}
            alt={'Logo of the app'}
            width={50}
            height={30}
          />
          <h1 className="ml-2">Calories App</h1>
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <input
          type="text"
          name="searchBar"
          placeholder="Search an item"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-600 h-11"
        />
        <button className="flex bg-white text-black font-semibold rounded-r-lg hover:bg-orange-600 transition-all h-11 w-10 justify-center items-center">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="flex flex-row ">
          <Link href='/addItem'>
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
