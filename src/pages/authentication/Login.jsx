import * as React from 'react';
import '../../assets/css/login-signup.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom';

import LonginBackground from "../../assets/images/bg-sign-in-basic.jpeg"
import {handlePostRequest} from "../../helper/requests";
import {BASEURL} from "../../helper/constants";
import { FaUserAlt } from "react-icons/fa";
import {successColoredTopCenter, successDarkTopCenter} from "../../components/common/beautify/Alerts";

const Login = (props) => {
    const [user, setUser] = React.useState(props.user)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await handlePostRequest(user, `${BASEURL}user/login`)

        if (response.status === 200) {
            console.log(response.data)
            sessionStorage.setItem('authToken', response.data.access_token)

            successDarkTopCenter('Login Successful');

            setTimeout(() => {navigate("/")}, 5000)
        }
    };

  return (
        <React.Fragment>
            <main className="main" style={{backgroundImage: `url(${LonginBackground})`, backgroundSize: '100%  100%', backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <div className="d-flex w-100 align-items-center justify-content-center mt-3 mb-5">
                                <FaUserAlt size={50} color="#2075e8"/>
                            </div>
                            <p className="text text-normal">New user? <span><Link to="/signup" className="text text-links">Create an account</Link></span></p>
                        </div>

                        <form name="login" className="form" onSubmit={handleSubmit}>
                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email/Username</label>
                                <input type="text" name="username" id="username" className="input-field" placeholder="Email Address"
                                    onChange={e => {setUser({...user, username: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password"
                                    onChange={e => {setUser({...user, password: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <Link to="/" className="text text-links">Forgot Password</Link>
                                <button type="submit" name="submit" className="input-submit" value="Login">Login</button>
                            </div>
                        </form>

                        <div className="striped">
                            <span className="striped-line"/>
                            <span className="striped-text">Or</span>
                            <span className="striped-line"/>
                        </div>

                        <div className="method">
                            <div className="method-control">
                                <Link to="/" className="method-action">
                                    <FcGoogle className="mr-1" size={20}/>
                                    <span>Sign in with Google</span>
                                </Link>
                            </div>

                            <div className="method-control">
                                <Link to="/" className="method-action">
                                    <BsFacebook size={20} color="blue" className="mr-1"/>
                                    <span>Sign in with Facebook</span>
                                </Link>
                            </div>

                            <div className="method-control">
                                <Link to="/" className="method-action">
                                    <BsApple size={20} className="mr-1"/>
                                    <span>Sign in with Apple</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Login;