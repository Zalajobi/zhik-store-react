import React from 'react'
import {Link} from "react-router-dom";

import '../../assets/css/common/header.css'

const Header = (props) => {
	return (
		<React.Fragment>
			<div className="navbar__container">
				<nav className="navbar__flex">
					<div className="navbar__left">
						<span className="navbar__hamburger"/>
						<form className="navbar__search">
							<div className="navbar__inputwithicon">
								<input type="text" name="" className="navbar__input" placeholder="Search ZhikStores..."/>
								<input type="submit" name="" className="navbar__button" value=""/>
							</div>
						</form>
					</div>
					<div className="navbar__right">
						<label htmlFor="navbarToggler" className="navbar__toggler__label">
							<span className="navbar__hamburger"/>
							<span>Menu</span>
						</label>

						<input type="checkbox" name="" className="navbar__toggler__input" id="navbarToggler"/>
							<ul className="navbar__links">
								<li><Link to="/profile">Profile</Link></li>
								<li><Link to="/">Product</Link>
									<ul className="navbar__sublinks">
										<li><Link to="/">linkedin</Link></li>
										<li><Link to="/">dribbble</Link></li>
										<li><Link to="/">behance</Link></li>
										<li><Link to="/">codepen</Link></li>
										<li><Link to="/">vimeo</Link></li>
									</ul>
								</li>
								<li><Link to="/">Jobs</Link>
									<ul className="navbar__sublinks">
										<li><Link to="/">front-end developer</Link></li>
										<li><Link to="/">back-end developer</Link></li>
										<li><Link to="/">web designer</Link></li>
									</ul>
								</li>
								<li><Link to="/">About Us</Link></li>
							</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	)
}

export default Header;