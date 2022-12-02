import React from 'react';
import Results from '../../../components/Results'
import { useLocation } from "react-router-dom"

function Race() {

  const location = useLocation();
  const pathname = location.pathname;

  const year = pathname.split("/")[1]
  const raceId = pathname.split("/")[2]

  return (
    <div className="text-white bg-dark">
      <Results raceId={raceId} year={year} />
    </div>
  )
}

export default Race