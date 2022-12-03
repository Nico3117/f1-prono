import Results from '../../../Components/Results'
import Form from '../../../Components/Form'
import React from 'react';
import { useLocation } from "react-router-dom"

function Race() {

  const location = useLocation();
  const pathname = location.pathname;

  const year = pathname.split("/")[1]
  const raceId = pathname.split("/")[2]

  return (
    <div className='flex'>
      <Form />
      <Results raceId={raceId} year={year} />
    </div>
  )
}

export default Race