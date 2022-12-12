import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    const [Schedule, setSchedule] = React.useState([]);
    const [Season, setSeason] = React.useState("");

  React.useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
    .then((res) => { return res.json() })
    .then((data) => { 
        setSchedule(data.MRData.RaceTable.Races);
        setSeason(data.MRData.RaceTable.season);
    })
    .catch((error) => { return console.log('error', error) });
  }, [])
  console.log(Schedule)

  return (
    <>
    <h1 className='text-4xl mx-5 my-10'>Faites vos pronostics sur la saison {Season} !</h1>
      {
        Schedule.map(race => 
          <Link to={`./${race.season}/${race.round}`} key={race.round}>
              <div className="flex flex-col m-5">
                  <div className="flex hover:shadow-lg p-10 rounded-md border-gray-500 border hover:border-gray-300 cursor-pointer">
                      <span className="text-red-600 font-semibold text-2xl pr-10">{race.round}</span>
                      <h2 className="font-semibold text-2xl">{race.raceName} - {race.Circuit.Location.country}</h2>
                  </div>
              </div>
          </Link>
        )
      }
    </>
  )
}

export default Home