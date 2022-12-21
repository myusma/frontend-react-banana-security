import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();

    const {isAuth, logout, user} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>

                {isAuth ?

                    <>
                        {/*<span>{user}</span>*/}
                        <button type="button" onClick={logout}>Logout</button>


                    </>
                    :
                    <>

                        <button type="button" onClick={() => navigate('/signin')}>Login</button>
                        <button type="button" onClick={() => navigate('/signup')}>Registreren</button>

                    </>

                }


            </div>
        </nav>
    );
}

export default NavBar;