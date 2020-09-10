import React from 'react';

const Navigation = () => {
    return (
        <nav className="submenu">
            <div className="container">
                <div className="submenu__wrapper">
                    <ul className="submenu__ul">
                        <li className="submenu__li">Article Types</li>
                        <li className="submenu__li"><a href="#" className="submenu__link active">Business</a></li>
                        <li className="submenu__li"><a href="#" className="submenu__link">Enterainment</a></li>
                        <li className="submenu__li"><a href="#" className="submenu__link">Health</a></li>
                        <li className="submenu__li"><a href="#" className="submenu__link">Science</a></li>
                        <li className="submenu__li"><a href="#" className="submenu__link">Sports</a></li>
                        <li className="submenu__li"><a href="#" className="submenu__link">Technology</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
