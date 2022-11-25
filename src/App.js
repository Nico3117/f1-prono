import React from 'react';
import './App.css';

function App() {

  const requestOptions = React.useState({
    method: 'GET',
    redirect: 'follow'
  });

  const [winner, setWinner] = React.useState("");
  
  React.useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json", requestOptions)
    .then((res) => { return res.json() })
    .then((data) => { return setWinner(data.MRData.RaceTable.Races[0].Results[0].Driver.familyName) })
    .catch((error) => { return console.log('error', error) });
  }, [])

  return (
    <>
    <h1>{winner}</h1>
    </>
  );
}

export default App;
