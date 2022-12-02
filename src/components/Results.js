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
    <div className="flex flex-col">
        {
          Results.map(rank => 
            <span key={rank.position}>{rank.position} - {rank.Driver.familyName}</span>
          )
        }
    </div>
  )
}

export default Results