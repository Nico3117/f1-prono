import React from 'react';
import Constructors from '../Components/Constructors';
import Drivers from '../Components/Drivers';

function Home() {
  return (
    <>
      <h1 className='text-4xl mx-5 my-10'>Faites vos pronostics !</h1>
      <div className="flex">
        <div className="bg-gray-700 w-1/2 rounded-lg m-4 h-80 overflow-hidden">
        <h2>Championnat pilote</h2>
          <Drivers/>
        </div>
        <div className="bg-gray-700 w-1/2 rounded-lg m-4 h-80 overflow-hidden">
          <h2>Championnat contructeur</h2>
          <Constructors/>
        </div>
      </div>
    </>
  )
}

export default Home