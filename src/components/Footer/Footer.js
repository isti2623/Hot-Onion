import React from 'react';
import logos from '../../images/logos.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-part'>
            <div className="row">
                <div className="col-md-6">
                    <img className='w-50 ms-5 mt-3 foot-image' src={logos} alt="" />
                    <p className='container text-white mb-5 ms-5'>copyright 2022 online food</p>
                </div>
                <div className="col-md-3">
                    <ul className='text-decoration-none text-white my-5'>
                        <br />
                        <br />
                        <br />
                        <li>About Online Food</li>
                        <li>Read Our Blog</li>
                        <li>Signup to deliver</li>
                        <li>Add your restaurant</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='text-decoration-none text-white my-5'>
                        <br />
                        <br />
                        <br />
                        <li>Get helps</li>
                        <li>Read FAQS</li>
                        <li>View All cities</li>
                        <li>Restaurent near me</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;