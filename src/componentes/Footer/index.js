import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={`${process.env.PUBLIC_URL}/img/LogoMain.png`} alt="Logo Main" />
        </div>
    );
};

export default Footer;
