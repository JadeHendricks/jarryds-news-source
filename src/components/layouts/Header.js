import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="header__title">Jarryds News Spot</Link>
                    <div className="header__selectWrapper">
                        <select className="header__select">
                            <option value="ZA">South Africa</option>
                        </select>
                    </div>
                    <ul className="header__ul">
                        <li className="header__li"><Link to="/" className="header__link active">Articles</Link></li>
                        <li className="header__li"><Link to="/about" className="header__link">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
