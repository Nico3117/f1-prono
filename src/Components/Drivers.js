import React from 'react'

function Drivers() {

    const [Standing, setStanding] = React.useState([])

    React.useEffect(() => {
        fetch("https://ergast.com/api/f1/current/driverStandings.json")
        .then((res) => { return res.json() })
        .then((data) => { setStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings) })  
        .catch((error) => { return console.log('error', error) });
      }, [])

  return (
    <>
        {
            Standing.map(driver => 
                <span className="flex flex-col font-semibold text-2xl" key={driver.position}>{driver.position} - {driver.Driver.givenName} {driver.Driver.familyName} - {driver.points} points</span>
            )
        } 
    </>
  )
}

export default Drivers