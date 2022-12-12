import React from 'react';
import logo from '../Img/logo-f1.png'; 
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';

function Sidebar() {

    const [Open, setOpen] = React.useState(true);
    const [Theme, setTheme] = React.useState(localStorage.getItem('Theme') || 'Dark');

    const OpenSidebar = () => {
        if (Open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const toggleTheme = () => {
        if (Theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    React.useEffect(() => {
        localStorage.setItem('Theme', Theme);
        document.body.className = Theme;
    }, [Theme]);

  return (
    <>
    <div className="w-full">
        <AiOutlineMenu onClick={OpenSidebar}/>
    </div>
    <div className={"flex flex-col text-gray-800 " + ( Open ? "hidden" : "")}>
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-dark h-full shadow-lg border-solid border-t-2 border-red-700">
            <div className="h-20 border-b border-gray-800 flex items-center justify-around">
                <Link to='/' className="w-fit inline-block"><img src={logo} width="90"></img></Link>
                <AiOutlineClose  onClick={OpenSidebar} className="text-white" size={30}/>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-6 space-y-1">
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Tableau de bord</div>
                        </div>
                    </li>
                    <li>
                        <Link to='/' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <AiOutlineHome />
                            </span>
                            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Accueil</span>
                        </Link>
                    </li>
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Paramètres</div>
                        </div>
                    </li>
                    <li>
                        <Link to='/mon-compte' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <AiOutlineUser />
                            </span>
                            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Mon compte</span>
                        </Link>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4 text-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Déconnexion</span>
                    </a>
                    </li>
                </ul>
                <div className="relative flex bottom-0">
                    <BsMoon />
                    <div className="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" onClick={toggleTheme} name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <BsSun />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar