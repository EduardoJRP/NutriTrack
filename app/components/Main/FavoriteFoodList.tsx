import React from 'react';

interface FavoriteFoodListProps {
  className?: string;
}

const FavoriteFoodList: React.FC<FavoriteFoodListProps> = ({ className }) => {
  return (
    <div className={`m-6 p-6 rounded-xl shadow-lg ${className}`}>
      <h2 className="text-5xl">Foods you have been taking lately:</h2>
      <ul className="list-disc list-inside m-4">
        <li className="text-xl m-2">Burguer</li>
        <li className="text-xl m-2">Pizza</li>
        <li className="text-xl m-2">Strawberries</li>
        <li className="text-xl m-2">Watermelon</li>
        <li className="text-xl m-2">Other</li>
      </ul>
    </div>
  );
};

export default FavoriteFoodList;
