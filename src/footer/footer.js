import React from 'react';
import "./footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"

const Footer = (props) => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                { window.location.pathname === "/privatePortal" && props.value ? <li><a href="/excelUpload/Admin">Admin</a></li> : null }
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><textarea type="text" style={{marginRight: "3px"}}></textarea><button id='submit' style={{display:"block", verticalAlign: "center", color: "gray", cursor: "pointer"}}>Submit</button></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Navigate</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/stategovtportal">State Government Jobs</a></li>
                                <li><a href="/centralgovtPortal">Central Government Jobs</a></li>
                                <li><a href="/privatePortal">IT Jobs</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"><FaFacebook/></i></a>
                                <a href="#"><i className="fab fa-twitter"><FaTwitter/></i></a>
                                <a href="#"><i className="fab fa-instagram"><FaInstagram/></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"><FaLinkedin/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;