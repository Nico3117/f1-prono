import React from 'react'

function Results({season, id}) {

    const [Results, setResults] = React.useState([]);
  
    React.useEffect(() => {
      fetch(`https://ergast.com/api/f1/${season}/${id}/results.json`)
        .then((res) => { return res.json() })
        .then((data) => { return setResults(data.MRData.RaceTable.Races[0].Results)})
        .catch((error) => { return console.log('error', error) });
    }, [])

  return (
    <div className="p-7">
      <div className="flex flex-col">
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