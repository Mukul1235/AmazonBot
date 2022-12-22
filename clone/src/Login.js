import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import "./Login.css"
import { firebaseApp } from "./firebaseConfig";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
function Login() {
    let auth = getAuth();
    // const [email, setEmail] = useState();
    // const [Password, setPassword] = useState();

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    
    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
    
        setData({ ...data, ...inputs })
    }
    
  const addData = () => {
      createUserWithEmailAndPassword(auth, data.email, data.password);
  }
    

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-in </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                        onChange={event => handleInputs(event)}
                    ></input>
                    <h5>Password</h5>
                    <input type="password" 
                        onChange={event => handleInputs(event)}>
                    </input>
                    <button className='login__signInButton' type="submit" onClick={addData}>Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to the
                    AMAZON FAKE CLONE Conditions of
                    Use & Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
         
            </div>

        </div>
    );
}

export default Login





{/**     <button onClick={register} className='login__registerButton'>Create New Account</button> */

    // const Signin = e => {
    //     e.preventDefault(); //To prevent the refresh 
    //     // so that no email and password get lost

    //     auth.createUserWithEmailAndPassword(email, Password)
    //         .then((auth) => {
    //             console.log(auth);
    //     })
    //     // Some fancy firebase Signin
    // }

    // const register = e => {
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(email, Password)
    //         .then((auth) => {
    //         console.log(auth);
    //     })

    //     // Some Fancy firebase register

    // }


}