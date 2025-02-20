import React from 'react';

interface UserWelcomeCardProps {
  className?: string;   
}

const UserWelcomeCard: React.FC<UserWelcomeCardProps> = ({ className }) => {
  return (
    <div className={`m-6 p-6 rounded-xl shadow-lg ${className}`}>
      <h1>Welcome Back User</h1>
    </div>
  );
};

export default UserWelcomeCard;
