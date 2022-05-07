import React, {useState} from 'react'
import {BsFillShieldLockFill} from "react-icons/bs";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

import '../../assets/css/pass-reset.css'
import {handlePostRequest} from "../../helper/requests";
import {BASEURL} from "../../helper/constants";
import {errorDarkTopCenter, successDarkTopCenter} from "../../components/common/beautify/Alerts";


const ChangePassword = (props) => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const[password, setPassword] = useState('')
	const[confirmPassword, setConfirmPassword] = useState('')
	const[disableButton, setDisableButton] = useState(true)

	function checkPassword() {
		if (password.match(confirmPassword) && password.length >= 8)
			setDisableButton(false)
		else
			setDisableButton(true)
	}


	async function setNewPassword() {
		let authToken = searchParams.get('token')

		console.log(authToken)

		if (authToken) {
			const response = await handlePostRequest({"password": password}, `${BASEURL}user/password/reset/email_reset`, authToken)
			if(response.status === 200) {
				successDarkTopCenter(response.data)
				setTimeout(() => {navigate("/login")}, 5000)
			} else {
				errorDarkTopCenter('Password reset failed')
			}
		}
	}

	return (
		<React.Fragment>
			<div className="reset-password-main">
				<div className="d-flex align-items-center justify-content-center pt-5">
					<BsFillShieldLockFill size={50} color="#1b73e8"/>
				</div>
				<p className="sign text-capitalize" align="center">Enter new Password</p>
				<div className="form1">
					<input className="un" type="password" align="center" id="password" onKeyUp={checkPassword} onChange={e => {setPassword(e.target.value)}} placeholder="Password"/>
					<input className="un" type="password" align="center" id="confirm-password" onKeyUp={checkPassword} onChange={e => {setConfirmPassword(e.target.value)}} placeholder="Confirm Password"/>
					<button type="submit" disabled={disableButton} onClick={setNewPassword} name="submit" value="Submit" className="submit">Submit</button>
					<p className="forgot pb-5" align="center"><Link to="/login">Have an Account? Sign In...</Link></p>
				</div>
			</div>
		</React.Fragment>
    )
}

export default ChangePassword
