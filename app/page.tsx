'use client';

import React from 'react';
import NavBar from './components/Common/NavBar';
import TotalInfoCard from './components/Main/TotalInfoCard';
import UserWelcomeCard from './components/Main/UserWelcomeCard';
import UserInfo from './components/Main/UserInfo';
import FavoriteFoodList from './components/Main/FavoriteFoodList';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='m-6'>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <UserWelcomeCard className="w-2/3" />
            <TotalInfoCard className="w-1/3" />
          </div>
          <div className="flex flex-row">
            <UserInfo className="w-1/2" />
            <FavoriteFoodList className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
