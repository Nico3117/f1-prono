import React from 'react';
import { Link } from "react-router-dom"

function Home() {

  const [currentSeason, setCurrentSeason] = React.useState([])

  React.useEffect(() => {
      fetch("https://ergast.com/api/f1/2023.json")
      .then((res) => { return res.json() })
      .then((data) => { setCurrentSeason(data.MRData.RaceTable.Races) })  
      .catch((error) => { return console.log('error', error) });
    }, [])

    console.log(currentSeason)

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl mx-5 py-10'>Faites vos pronostics sur le prochaine gp !</h1>
      {
        currentSeason.map(race => 
          <Link key={race.round} to={race.Circuit.circuitId} className="flex align-items h-20 rounded-md m-5 border border-[#242424] items-center">
            <span className='text-yellow px-3 text-3xl'>{race.round}</span> {race.raceName}
          </Link>
        )
      }       
    </div>
  )
}

export default Home