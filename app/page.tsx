'use client';

import React from 'react';
import NavBar from './components/Common/NavBar';
import TotalInfoCard from './components/Main/TotalInfoCard';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <TotalInfoCard></TotalInfoCard>
      </div>
    </div>
  );
}
