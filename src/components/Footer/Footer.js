import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <h4>ENVATO MARKET</h4>
                <div className="footer-list">

                    <h5>Terms</h5>
                    <h5>Licenses</h5>
                    <h5>Market API
                    </h5>

                </div>
            </div>
            <div className="footer">
                <h4>HELP</h4>
                <div className="footer-list">
                    <h5>Help Center</h5>
                    <h5>Authors</h5>

                </div>
            </div>
            <div className="footer">
                <h4>OUR COMMUNITY</h4>
                <div className="footer-list">
                    <h5>Community</h5>
                    <h5>Blog</h5>
                    <h5>Forums</h5>
                    <h5>Meetups</h5>

                </div>
            </div>
        </div>
    );
};

export default Footer;