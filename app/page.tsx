'use client';

import React from 'react';
import NavBar from './components/Common/NavBar';
import TotalInfoCard from './components/Main/TotalInfoCard';
import UserWelcomeCard from './components/Main/UserWelcomeCard';
import UserInfo from './components/Main/UserInfo';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <UserWelcomeCard className="w-2/3" />
          <TotalInfoCard className="w-1/3" />
        </div>
        <div className='flex flex-row'>
          <UserInfo className="w-1/3" />
        </div>
      </div>
    </div>
  );
}
