import React from 'react';

function Circuit() {

    const [Circuit, setCircuit] = React.useState([])

    React.useEffect(() => {
        fetch("https://ergast.com/api/f1/current/circuits.json")
        .then((res) => { return res.json() })
        .then((data) => {   
            setCircuit(data.MRData.CircuitTable.Circuits);
        })
        .catch((error) => { return console.log('error', error) });
      }, [])

  return (
    <>
      {
        Circuit.map(circuit => 
        <img key={circuit.circuitId} src={`../Img/${circuit.circuitId}.png`} alt={`Circuit ${circuit.circuitId}`} />
        )
      }
    </>
  )
}

export default Circuit