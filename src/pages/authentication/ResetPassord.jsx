import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { BsFillShieldLockFill } from 'react-icons/bs'

import {handlePostRequest} from "../../helper/requests";
import {errorDarkTopCenter, successDarkTopCenter} from "../../components/common/beautify/Alerts";
import {BASEURL} from "../../helper/constants";

import '../../assets/css/pass-reset.css'

const ResetPassword = (props) => {
	const [email, setEmail] = useState('')

	async function resetPassword() {
		const response = await handlePostRequest({"email": email}, `${BASEURL}user/password/reset`)

		console.log(response)

		if (response.status ===  200) {
			successDarkTopCenter(`Password reset link has been sent to ${email}`)
		} else {
			errorDarkTopCenter(response.data)
		}
	}

	return (
		<React.Fragment>
			<div className="reset-password-main">
				<div className="d-flex align-items-center justify-content-center pt-5">
					<BsFillShieldLockFill size={50} color="#1b73e8"/>
				</div>
				<p className="sign" align="center">Reset Password</p>
				<div className="form1">
					<input className="un" type="text" align="center" onChange={e => {setEmail(e.target.value)}} placeholder="Enter Your Email Here"/>
					<button type="submit" onClick={resetPassword} name="submit" value="Submit" className="submit">Submit</button>
					<p className="forgot pb-5" align="center"><Link to="/login">Have an Account? Sign In...</Link></p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ResetPassword;