import React from 'react';
import logo from '../Img/logo-f1.png'; 
import { Link } from "react-router-dom";
import { BsMoon, BsSun } from 'react-icons/bs';

function Navbar() {

    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'Dark');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

  return (
    <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-t-2 border-red-700">

        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 mr-16">
                <Link to='/'><img src={logo} width="90"></img></Link>
            </div>
            <div className="block lg:hidden">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold lg:flex-grow">
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">
                    Menu 1
                </a>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">
                    Menu 2
                </a>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">
                    Menu 3
                </a>
            </div>
        </div>

        <BsMoon />
        <div className="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" onClick={toggleTheme} name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <BsSun />
    </nav>
  )
}

export default Navbar