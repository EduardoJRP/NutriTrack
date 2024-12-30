'use client';

import React from 'react';
import NavBar from './components/NavBar';
import TotalInfoCard from './components/TotalInfoCard';

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
