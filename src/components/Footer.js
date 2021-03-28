import React from 'react'

const Footer = ( {text}) => {
    return (
        <div className="footer">
            <div className="footer__text">
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default Footer;