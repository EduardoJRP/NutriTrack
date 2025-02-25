import React from 'react';

interface UserWelcomeCardProps {
  className?: string;   
}

const UserWelcomeCard: React.FC<UserWelcomeCardProps> = ({ className }) => {
  return (
    <div className={`m-6 p-6 rounded-xl shadow-lg ${className} flex flex-col justify-center items-center`}>
      <h1 className='text-7xl text-center'>Welcome Back User</h1>
      <h3 className='text-4xl text-center'>Check your calories down here!</h3>
    </div>
  );
};

export default UserWelcomeCard;
