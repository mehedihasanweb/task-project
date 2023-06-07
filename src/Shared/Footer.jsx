import React, { useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear())
    return (
        <footer className="footer bg-dark text-light ">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dolor elit. Integer euismod aliquet malesuada.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <address>
                            123 Main Street<br />
                            City, State<br />
                            Country<br />
                            <i className="fas fa-phone"></i> +1 234 567 890<br />
                            <i className="fas fa-envelope"></i> example@example.com
                        </address>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;