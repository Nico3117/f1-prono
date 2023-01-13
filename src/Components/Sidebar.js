import React from 'react';
import logo from '../Img/logo-f1.png'; 
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import { auth } from '../Config/Firebase';
import { signOut } from 'firebase/auth';

function Sidebar() {

    const user = auth.currentUser;
    const navigate = useNavigate();

    const [Open, setOpen] = React.useState(true);

    const OpenSidebar = () => {
        if (Open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const UserSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            setOpen(true);
        }).catch((error) => {
            console.log(error)
        });
    }

  return (
    <>
        <div className="w-full fixed top-0 bg-dark h-20 flex items-center">
            <div className="h-20 flex sm:justify-center w-60 items-center">
                <Link to='/' className="w-fit inline-block">
                    <AiOutlineMenu  onClick={OpenSidebar} className='sm:hidden pl-5 text-2xl w-fit'/>
                    <img src={logo} alt="logo" width="90" className='hidden sm:block'/>
                </Link>
            </div>
            <ul className="flex justify-center w-full hidden sm:flex">
                    <li className="h-11 flex items-center">
                        <Link to="/" className="flex h-full w-20 justify-center items-center">
                            <span className="font-semibold text-sm">Accueil</span>
                        </Link>
                    </li>
                    <li className="h-11 flex items-center">
                        <Link to="/" className="flex h-full w-20 justify-center items-center">
                            <span className="font-semibold text-sm">Accueil</span>
                        </Link>
                    </li>
            </ul>
            <div className='w-60 hidden sm:block'>
                { user ?             
                    <li className="h-11 flex items-center">
                        <Link to='/' onClick={UserSignOut} className="flex h-full w-full pl-5 items-center">
                            <AiOutlineLogout className="text-red-500 text-2xl" />
                        </Link>
                    </li> 
                :                     
                    <li className="h-11 flex items-center">
                        <Link to='/connexion' onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center">
                            <AiOutlineUser className='text-2xl'/>
                        </Link>
                    </li>
                } 
            </div>
        </div>
        <div className={"flex md:hidden flex-col text-gray-800 " + ( Open ? "hidden" : "")}>
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-dark h-full shadow-lg">
                <div className="h-20 border-b border-gray-900 flex items-center justify-around">
                    <Link to='/' onClick={OpenSidebar} className="w-fit inline-block"><img src={logo} alt="logo" width="90"></img></Link>
                    <AiOutlineClose  onClick={OpenSidebar} className="text-white cursor-pointer" size={30}/>
                </div>
                <ul className="flex flex-col py-6">
                    <li className="px-5 h-11 flex items-center">
                        <div className="font-semibold text-sm text-gray-300 uppercase">Tableau de bord</div>
                    </li>
                    <li className="h-11 flex items-center">
                        <Link to="/" onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                            <AiOutlineHome />
                            <span className="ml-2 font-semibold text-sm">Accueil</span>
                        </Link>
                    </li>
                    <li className="px-5 h-11 flex items-center">
                        <div className="font-semibold text-sm text-gray-300 uppercase">Paramètres</div>
                    </li>
                    { user ?                
                        <li className="h-11 flex items-center">
                            <Link to='/' onClick={UserSignOut} className="flex h-full w-full pl-5 items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500">
                                <AiOutlineLogout className="text-red-500" />
                                <span className="ml-2 font-semibold text-sm">Déconnexion</span>
                            </Link>
                        </li> 
                    :                     
                        <li className="h-11 flex items-center">
                            <Link to='/connexion' onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                                <AiOutlineUser />
                                <span className="ml-2 font-semibold text-sm">Se connecter</span>
                            </Link>
                        </li>
                    } 
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar