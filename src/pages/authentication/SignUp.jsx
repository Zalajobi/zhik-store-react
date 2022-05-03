import React from 'react'
import LonginBackground from "../../assets/images/rotating-card-bg-front.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaUserPlus } from 'react-icons/fa';
import { BsApple, BsFacebook } from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";

import '../../assets/css/login-signup.css'
import {handlePostRequest} from "../../helper/requests";
import {BASEURL} from "../../helper/constants";
import {errorDarkTopCenter, successDarkTopCenter} from "../../components/common/beautify/Alerts";


const SignUp = (props) => {
	const [user, setUser] = React.useState(props.user)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
		event.preventDefault();
        console.log(user)
		const response = await handlePostRequest(user, `${BASEURL}user/signup`)
		if(response.status === 200) {
            successDarkTopCenter(response.data)
            setTimeout(() => {navigate("/login")}, 5000)
		} else {
            errorDarkTopCenter('User with username, phone or email already exists')
            setTimeout(() => {navigate("/signup")}, 5000)
		}
	};

	return (
		<React.Fragment>
            <main className="main" style={{backgroundImage: `url(${LonginBackground})`, backgroundSize: '100%  100%', backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            {/*<h1 className="text text-large">Register</h1>*/}
                            <div className="d-flex w-100 align-items-center justify-content-center mt-3 mb-5">
                                <FaUserPlus size={50} color="#2075e8"/>
                            </div>
                            <p className="text text-normal">Existing User? <span><Link  to="/login" className="text text-links">Login</Link></span></p>
                        </div>

                        <form name="login" className="form" onSubmit={handleSubmit}>
                            <div className="input-control">
                                <label htmlFor="title" className="input-label" hidden>Title</label>
                                <select required name="title" id="title" className="input-field mr-2 ml-0 w-25" onChange={e => {setUser({...user, title: e.target.value})}}>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Rev.">Rev.</option>
                                    <option value="Dr.">Dr.</option>
                                </select>

                                <label htmlFor="first-name" className="input-label ml-2" hidden>First Name</label>
                                <input required type="text" name="first-name" id="first-name" className="input-field" placeholder="First Name" onChange={e => {setUser({...user, first_name: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="middle-name" className="input-label" hidden>Other Name</label>
                                <input required type="text" name="middle-name" id="middle-name" className="input-field mr-1 ml-0" placeholder="Middle Name" onChange={e => {setUser({...user, middle_name: e.target.value})}}/>

                                <label htmlFor="surname" className="input-label ml-1" hidden>Surname</label>
                                <input required type="text" name="surname" id="surname" className="input-field" placeholder="Surname" onChange={e => {setUser({...user, last_name: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="username" className="input-label" hidden>Username</label>
                                <input required type="text" name="username" id="username" className="input-field mr-1 ml-0" placeholder="Username" onChange={e => {setUser({...user, username: e.target.value})}}/>

                                <label htmlFor="dob" className="input-label ml-1" hidden>Surname</label>
                                <input required type="date" name="dob" id="dob" className="input-field" onChange={e => {setUser({...user, dob: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="gender" className="input-label" hidden>Gender</label>
                                <select required name="gender" id="gender" className="input-field mr-2 ml-0" onChange={e => {setUser({...user, gender: e.target.value})}} style={{width: "40%"}}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Transgender">Transgender</option>
                                    <option value="Non Binary">Non-Binary</option>
                                    <option value="Others">Others</option>
                                </select>

                                <label htmlFor="phone" className="input-label ml-2" hidden>Phone Number</label>
                                <input required type="number" name="phone" id="phone" className="input-field" placeholder="+234 705 398 0998" onChange={e => {setUser({...user, phone: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email</label>
                                <input type="email" name="email" className="input-field" placeholder="zalajobi@gmail.com"
                                    onChange={e => {setUser({...user, email: e.target.value})}}/>
                            </div>

                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password"
                                    onChange={e => {setUser({...user, password: e.target.value})}}/>
                            </div>

                            <div className="input-control d-flex align-items-center justify-content-center">
                                <button type="submit" name="submit" className="input-submit" value="Login">Register</button>
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
                                    <span>Sign up with Google</span>
                                </Link>
                            </div>

                            <div className="method-control">
                                <Link to="/" className="method-action">
                                    <BsFacebook size={20} color="blue" className="mr-1"/>
                                    <span>Sign up with Facebook</span>
                                </Link>
                            </div>

                            <div className="method-control">
                                <Link to="/" className="method-action">
                                    <BsApple size={20} className="mr-1"/>
                                    <span>Sign up with Apple</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </React.Fragment>
	)
}

export default SignUp;