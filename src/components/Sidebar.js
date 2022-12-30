import React from 'react';
import logo from '../Img/logo-f1.png'; 
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
// import { BsMoon, BsSun } from 'react-icons/bs';
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

    // Choix thème sombre / clair 
    //
    // const [Theme, setTheme] = React.useState(localStorage.getItem('Theme') || 'Dark');
    // const toggleTheme = () => {
    //     if (Theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // };

    // React.useEffect(() => {
    //     localStorage.setItem('Theme', Theme);
    //     document.body.className = Theme;
    // }, [Theme]);

  return (
    <>
        <div className="w-full bg-dark h-20 flex items-center pl-6">
            <AiOutlineMenu onClick={OpenSidebar} className="text-white" size={30}/>
        </div>
        <div className={"flex flex-col text-gray-800 " + ( Open ? "hidden" : "")}>
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-dark h-full shadow-lg">
                <div className="h-20 border-b border-gray-800 flex items-center justify-around">
                    <Link to='/' onClick={OpenSidebar} className="w-fit inline-block"><img src={logo} alt="logo" width="90"></img></Link>
                    <AiOutlineClose  onClick={OpenSidebar} className="text-white" size={30}/>
                </div>
                <ul className="flex flex-col py-6">
                    <li className="px-5 h-11 flex items-center">
                        <div className="font-semibold text-sm text-gray-300 uppercase">Tableau de bord</div>
                    </li>
                    <li className="h-11 flex items-center">
                        <Link to='/' onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                            <AiOutlineHome />
                            <span className="ml-2 font-semibold text-sm">Accueil</span>
                        </Link>
                    </li>
                    <li className="px-5 h-11 flex items-center">
                        <div className="font-semibold text-sm text-gray-300 uppercase">Paramètres</div>
                    </li>
                    { user ? 
                        <>                    
                            <li className="h-11 flex items-center">
                                <Link to='/mon-compte' onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                                    <AiOutlineUser />
                                    <span className="ml-2 font-semibold text-sm">Mon compte</span>
                                </Link>
                            </li>
                            <li className="h-11 flex items-center">
                                <Link to='/' onClick={UserSignOut} className="flex h-full w-full pl-5 items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500">
                                    <AiOutlineLogout className="text-red-500" />
                                    <span className="ml-2 font-semibold text-sm">Déconnexion</span>
                                </Link>
                            </li> 
                        </> 
                        :                     
                        <li className="h-11 flex items-center">
                            <Link to='/connexion' onClick={OpenSidebar} className="flex h-full pl-5 w-full items-center focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500">
                                <AiOutlineUser />
                                <span className="ml-2 font-semibold text-sm">Se connecter</span>
                            </Link>
                        </li>
                    } 
                </ul>
                {/* <div className="relative flex bottom-0">
                    <BsMoon />
                    <div className="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" onClick={toggleTheme} name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <BsSun />
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Sidebar