import React from 'react';

interface UserWelcomeCardProps {
  className?: string;
}

const UserInfo: React.FC<UserWelcomeCardProps> = ({ className }) => {
  return (
    <div className={`m-6 p-6 rounded-xl shadow-lg ${className}`}>
      <h1>Here is your info User:</h1>
      <h3></h3>
    </div>
  );
};

export default UserInfo;
