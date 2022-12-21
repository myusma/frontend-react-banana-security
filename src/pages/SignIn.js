import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    const { login } = useContext(AuthContext);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            email:email,
            password:password

        });
        login(email)
    }


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

            </div>
            <button type="submit" onClick={login}>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;