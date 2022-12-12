import Results from '../../../Components/Results'
import Circuit from '../../../Components/Circuit'
import Form from '../../../Components/Form'
import React from 'react';
import { useParams } from "react-router-dom"

function Race() {
  const { season, id } = useParams();

  const [Tabs, setTabs] = React.useState(1);

  return (
    <>
      <div className='flex'>
        <div className="w-3/6 p-10">
          <Form />
        </div>
        <div className="w-3/6 p-10">
          <div className="flex flex-wrap">
            <ul className="flex list-none w-full">
              <li className={"px-3 pb-3 w-1/3 text-center " + (Tabs === 1 && "border-solid border-b-2 border-red-700")}>
                <a className="text-2xl shadow-lg rounded" href="#result"
                  onClick={e => {
                    e.preventDefault();
                    setTabs(1);
                  }}
                >
                  Résultat
                </a>
              </li>
              <li className={"px-3 pb-3 w-1/3 text-center " + (Tabs === 2 && "border-solid border-b-2 border-red-700")}>
                <a className="text-2xl shadow-lg rounded" href="#lastresult"
                  onClick={e => {
                    e.preventDefault();
                    setTabs(2);
                  }}
                >
                  {season - 1}
                </a>
              </li>
              <li className={"px-3 pb-3 w-1/3 text-center " + (Tabs === 3 && "border-solid border-b-2 border-red-700")}>
                <a className="text-2xl shadow-lg rounded" href="#circuit"
                  onClick={e => {
                    e.preventDefault();
                    setTabs(3);
                  }}
                >
                  Circuit
                </a>
              </li>
            </ul>

            <div className={Tabs === 1 ? "block" : "hidden"} id="result">
              <Results season={season} id={id} />
            </div>
            <div className={Tabs === 2 ? "block" : "hidden"} id="lastresult">

            </div>
            <div className={Tabs === 3 ? "block" : "hidden"} id="circuit">
              <Circuit/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Race