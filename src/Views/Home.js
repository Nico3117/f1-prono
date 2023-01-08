import React from 'react';
// import Constructors from '../Components/Constructors';
// import Drivers from '../Components/Drivers';

function Home() {

  const [currentSeason, setStanding] = React.useState([])

  React.useEffect(() => {
      fetch("https://ergast.com/api/f1/2023.json")
      .then((res) => { return res.json() })
      .then((data) => { setStanding(data.MRData.RaceTable.Races) })  
      .catch((error) => { return console.log('error', error) });
    }, [])

    console.log(currentSeason)

  return (
    <>
      <h1 className='text-4xl mx-5 my-10'>Faites vos pronostics sur le prochaine gp !</h1>

      {
            currentSeason.map(season => 
                <span className="flex flex-col font-semibold text-2xl" key={season.round}>{season.raceName} - {season.date}</span>
            )
        } 
      {/* <div className="flex">
        <div className="bg-gray-700 w-1/2 rounded-lg m-4 h-80 overflow-hidden">
          <Drivers/>
        </div>
        <div className="bg-gray-700 w-1/2 rounded-lg m-4 h-80 overflow-hidden"> 
          <Constructors/>
        </div>
      </div> */}
    </>
  )
}

export default Home