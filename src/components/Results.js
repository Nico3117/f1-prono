import React from 'react'

function Results({year, raceId}) {

    const [Results, setResults] = React.useState([]);
  
    React.useEffect(() => {
      fetch(`https://ergast.com/api/f1/${year}/${raceId}/results.json`)
        .then((res) => { return res.json() })
        .then((data) => { return setResults(data.MRData.RaceTable.Races[0].Results)})
        .catch((error) => { return console.log('error', error) });
    }, [])

  return (
    <div className="w-3/6 p-10">
      <div className="flex flex-col ">
        <h2 className="text-2xl mb-5">Résultat de la course</h2>
          {
            Results.map(rank => 
              <span key={rank.position}>{rank.position} - {rank.Driver.familyName}</span>
            )
          }
      </div>
    </div>
  )
}

export default Results