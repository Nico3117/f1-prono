import React from 'react'

function Constructors() {

    const [Standing, setStanding] = React.useState([])

    React.useEffect(() => {
        fetch("https://ergast.com/api/f1/current/constructorStandings.json")
        .then((res) => { return res.json() })
        .then((data) => { setStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings) })  
        .catch((error) => { return console.log('error', error) });
      }, [])

  return (
    <>
        {
            Standing.map(constructeur => 
                <span className="flex flex-col font-semibold text-2xl" key={constructeur.position}>{constructeur.position} - {constructeur.Constructor.name} - {constructeur.points} points</span>
            )
        } 
    </>
  )
}

export default Constructors