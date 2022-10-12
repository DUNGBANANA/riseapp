import React from 'react';
import './main.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";



import {DATASLIDE} from './Dataslide'

export default function Testimonials(){
    return (
        <div className='section-relationships'>
            <div className="container">
                <div className="heading">
                    <h2>
                        Transparent Relationships Yield The
                        <mark>Best Results</mark>
                    </h2>
                    <p>Our custom software development company is an extra force that helps to translate your ideas in remarkable applications. Development services that are offered are the tools to achieve your project’s goals.</p>
                </div>
                <div className="trust-us-slider">
                <div className="container">
                    <div className="slick">
                        <Slider
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            speed={600}
                            infinite={true}
                            fade={true}
                            autoplay={true}
                        >
                            {DATASLIDE.map((item)=>(
                                <div className="item">
                                    <div className="img">
                                        <div className="avatar-slide" style={{ backgroundImage: `url(${item.avatar})` }}></div>
                                        <a href = "/" className='play-video'>{}</a>
                                    </div>

                                    <div className="infor">
                                        <blockquote>
                                            {item.title}
                                        </blockquote>
                                        <div className="author-block">{item.name}</div>
                                    </div>
                              </div>
                            ))}                    
                        </Slider>                
                        </div>
                </div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
};

