import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="logo"><Link className="link" to='/'>News</Link></h1>
            </div>
        </div>
    );
};

export default Header;