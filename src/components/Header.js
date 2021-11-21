import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header_image" 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3b7b527518607.560acd8ccb0e9.jpg"
                alt=""
            />
            <div className="header_text">
                <h2>Konfigurator servisa</h2>
                <h4>Izračunajte trošak servisa</h4>
            </div>
        </div>
    )
}

export default Header