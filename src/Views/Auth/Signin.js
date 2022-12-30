import React from 'react';
import { auth } from '../../Config/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/");
          })
          .catch((error) => {    
            setError(error.message);
          });
    };

    return (
        <form className="w-full max-w-2xl mx-auto" onSubmit={handleLogin}>
            <h1 className="text-gray-600 my-8 text-center text-xl font-bold">Inscrivez-vous</h1>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Mot de passe" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Connexion</button>
            <div className="flex justify-between items-center mt-4">
                <Link to="/inscription">Pas de compte ?</Link>
            </div>
            {error && <span className='text-red-700'>{error}</span>}
        </form> 
    )
}

export default Signin