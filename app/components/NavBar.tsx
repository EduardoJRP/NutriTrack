import React from 'react';

const NavBar = () => {
  return (
    <div className="flex flex-row bg-orange-400 place-content-between p-4 ">
      <div className='flex flex-row'>
        <div>An Image</div>
        <h1 className="place-self-start">Calories App</h1>
      </div>
      <div className="">
        <input />
        <button>Click Me</button>
      </div>
      <div>
        <div>Other Buttons Here</div>
      </div>
    </div>
  );
};

export default NavBar;
