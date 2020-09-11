import React, { useContext } from 'react';
import BaseContext from "../../context/base/BaseContext";

const Navigation = () => {

    const { getHeadlines, currentCategory } = useContext(BaseContext);

    const handleOnClick = (e, category) => {
        e.preventDefault();
        if (currentCategory === category) {
            return;
        }
        getHeadlines(category);
    }

    return (
        <nav className="submenu">
            <div className="container">
                <div className="submenu__wrapper">
                    <ul className="submenu__ul">
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'business' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'business') }>Business</a></li>
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'entertainment' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'entertainment') }>Entertainment</a></li>
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'health' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'health') }>Health</a></li>
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'science' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'science') }>Science</a></li>
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'sports' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'sports') }>Sports</a></li>
                        <li className="submenu__li"><a href="#!" className={ currentCategory === 'technology' ? 'submenu__link active' : 'submenu__link' } onClick={ (e) => handleOnClick(e, 'technology') }>Technology</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
