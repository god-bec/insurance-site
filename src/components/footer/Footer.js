import { IconButton } from '@material-ui/core'
import React from 'react'
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import './Footer.css'



export const Footer = () => {
    return (
        <div className='footer'>
            <div className='foot-container' id="footer">
                <div className='foot-logo'>
                    <h3>sureHealth</h3>
                </div>
                <div className='foot-ul'>
                    <ul>
                        <li><h4>COMPANY</h4></li>
                       <li>About</li>
                        <li>Blog</li>
                        <li>Team</li>
                        <li>Board</li>
                        <li>Board</li>
                    </ul>

                    <ul>
                        <li><h4>HEALTH PLANS</h4></li>
                        <li>For You & Your Family</li>
                        <li>For Your Parents</li>
                        <li>For Business</li>
                    </ul>

                    <ul>
                        <li><h4>RESOURCES</h4></li>
                        <li>Your Available Hospitals</li>
                        <li>Your Benefit List</li>
                        <li>Download Your Care App</li>
                        <li>Become An Affiliate</li>
                        <li>Hospital Portal</li>
                        <li>FAQs</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                    </ul>

                    <ul>
                        <li><h4>CONTACT</h4></li>
                        <li>32 Elizabeth street Lagos, Nigeria.</li>
                        <li>0700-SureHEALTH (08148714389)</li>
                        <li>hello@sureHealth.com</li>
                    </ul>
                </div>
            </div>

            <div className='foot-icon'>
                <h4>&copy;2022 sureHealth. All Rights Reserved.</h4>
                <div>
                    <IconButton>
                        <FaLinkedinIn/>
                    </IconButton>
                    <IconButton>
                        <FaFacebookF />
                    </IconButton>
                    <IconButton>
                        <FaTwitter />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
