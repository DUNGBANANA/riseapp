import React from 'react';
import slide1 from '../../assets/img-1@3x-1024x673.png.webp'
import slide2 from '../../assets/img-2@3x-1024x713.png.webp'
import slide3 from '../../assets/img-3@3x-881x1024.png.webp'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import './main.scss'

export default function Ourwork(){
    return (
        <div className='our-works'>
            <div className="section-slide">
                <div className="container">
                    <div className="image-has-parallax">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="info">
                        <div className="title">
                            <div className="icon">
                                <img src={logo1} alt="" />
                            </div>
                            <h3>Kego</h3>
                        </div>
                        <ul className="tags">
                            <li>iOS</li>
                            <li>Android</li>
                            <li>Web</li>
                            <li>Healthcare</li>
                            <li>SaaS</li>
                            <li>USA</li>
                        </ul>
                        <p>Kego was developed as an app for telemedicine. As a part of this project, we have developed two app types with different functionality to suit both patients and doctors, covering the most widespread platforms iOS and Android. </p>
                        <a href="/" className='button-view'>View Case</a>
                    </div>
                </div>
            </div>
            <div className="section-slide">
            <div className="container">
                    <div className="image-has-parallax">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="info">
                        <div className="title">
                            <div className="icon">
                                <img src={logo2} alt="" />
                            </div>
                            <h3>Ruggengraat</h3>
                        </div>
                        <ul className="tags">
                            <li>iOS</li>
                            <li>Android</li>
                            <li>Web</li>
                            <li>Fitness</li>
                            <li>CRM</li>
                            <li>Netherlands </li>
                        </ul>
                        <p>Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs. </p>
                        <a href="/" className='button-view'>View Case</a>
                    </div>
                </div>                
            </div>   
            
            <div className="section-slide">
            <div className="container">
                    <div className="image-has-parallax">
                        <img src={slide3} alt="" />
                    </div>
                    <div className="info">
                        <div className="title">
                            <div className="icon">
                                <img src={logo3} alt="" />
                            </div>
                            <h3>Favocity</h3>
                        </div>
                        <ul className="tags">
                            <li>iOS</li>
                            <li>Social</li>
                            <li>Geolocation</li>
                            <li>Canada</li>
                        </ul>
                        <p>We created Favocity as an app, where customers can get a list of places nearby by chosen criteria. Based on the project's main aim, we integrated Google Maps and Social feed, to provide customers with functions of networking and a place sharing. </p>
                        <a href="/" className='button-view'>View Case</a>
                    </div>
                </div>                
            </div>
            
        </div>
    );
};

