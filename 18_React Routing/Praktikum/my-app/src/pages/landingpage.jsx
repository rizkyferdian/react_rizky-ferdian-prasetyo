import React from 'react'
import Navbar from '../components/navbar'
import '../index.css'

import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <Navbar />

            <div className="">
                <div className="header">
                    <div className="left-content">
                        <div>
                            <h1 className="text-header">Better Solutions For Your <br /> Business</h1>
                            <p className="text-header">We are team of talented designers making websites with <br /> Bootstrap</p>
                        </div>
                        <div>
                            <button id="btn-cta" type="submit">Get Started</button>
                            <Link to="/">
                                <button className='ms-3 btn btn-success'>Menuju Halaman Create Product</button>
                            </Link>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src="hero-img.png" alt="images" />
                    </div>
                </div>
                <div className="content-join">
                    <div>
                        <h2 className="title-body">Join Our Newsletter</h2>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="subcribe">
                            <input type="text" name="join" id="join" />
                            <button className="btn-subcribe" type="submit">Get Started</button>

                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="grid-container" >
                    <div>
                        <h1 className="title-footer">Arsha</h1>
                        <div className="sub-content">
                            <p>A108 Adam Street <br /> New York, NY 535022 <br /> United States</p>

                            <p> Phone: +1 5589 55488 55</p>
                            <p>Email: info@example.com </p>
                        </div>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <div className="sub-content">
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Terms of Services</p>
                            <p>Privacy policy</p>
                        </div>
                    </div>
                    <div>
                        <h3> Our Services</h3>
                        <div className="sub-content">
                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Product Management</p>
                            <p>Marketing</p>
                            <p>Graphic Design</p>
                        </div>
                    </div>
                    <div>
                        <h3> Our Social Network</h3>
                        <div className="sub-content">
                            <p>Cras fermentum odio eu feugiat lide par <br /> naso tierra videa magna derita valies</p>
                        </div>
                        <div className="circle-group">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>© Copyright Arsha. All Rights Reserved</p>
                    <p>Designed by BootstrapMade</p>
                </div>
            </footer>
        </>
    )
}

export default LandingPage