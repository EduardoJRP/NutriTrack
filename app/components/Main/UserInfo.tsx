import React from 'react';

interface UserWelcomeCardProps {
  className?: string;
}

const UserInfo: React.FC<UserWelcomeCardProps> = ({ className }) => {
  return (
    <div className={`m-6 p-6 rounded-xl shadow-lg ${className}`}>
      <h2 className='text-5xl'>Here is your info User:</h2>
      <ul className='list-disc list-inside m-4'>
        <li className='text-xl m-2'>Weight: 100g</li>
        <li className='text-xl m-2'>Height: 180m</li>
        <li className='text-xl m-2'>Fat Percentage: 12%</li>
        <li className='text-xl m-2'>Age: 25</li>
      </ul>
    </div>
  );
};

export default UserInfo;
