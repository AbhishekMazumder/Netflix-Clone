import React, { useState } from 'react';
import './navbar.scss';
import nfLogo from '../../images/Netflix_Logo.png';
import avatar from '../../images/avatar_logo.png';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === "0" ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="container">
				<div className="left">
					<img src={nfLogo} alt="" />
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New & Popular</span>
					<span>My List</span>
				</div>

				<div className="right">
					<SearchIcon className="icons" />
					<span>KIDS</span>
					<NotificationsIcon className="icons" />
					<img src={avatar} alt="" />
					<div className="profile">
						<ArrowDropDownIcon className="icons" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
