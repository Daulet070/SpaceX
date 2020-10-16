import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './footer.css';

const Footer = ( {links: {elon_twitter: elonMusk, flickr, twitter, website}, summary}) => (
    <footer className="footer">
        
        <img src={logo}
            alt="logo Space X"
            className="logo"/>

		<nav className="footer-nav">
			<ul className="list">
				<li className="item">
                    <Link to={elonMusk}
                        rel="noopener noreferrer"
                        target='_blank'
                        className="item-link">
                        Elon Musk Twitter
                    </Link>
                </li>
				<li className="item">
                    <Link to={twitter}
                        rel="noopener noreferrer"
                        target='_blank'
                        className="item-link">
                        Twitter
                    </Link>
                </li>
				<li className="item">
                    <Link to={flickr}
                        rel="noopener noreferrer"
                        target='_blank'
                        className="item-link">
                        Flickr
                    </Link>
                </li>
				<li className="item">
                    <Link to={website}
                        rel="noopener noreferrer"
                        target='_blank'
                        className="item-link">
                        Website
                    </Link>
                </li>
			</ul>
		</nav>
		<p className="footer-text">
			{summary}
            <Link className="footer-link"
                to="mailto:rideshare@spacex.com">
                rideshare@spacex.com
            </Link>
		</p>

	</footer>
);

export default Footer;