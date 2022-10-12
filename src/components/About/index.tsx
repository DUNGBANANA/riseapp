import React from 'react';
import "./main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";

import { DataSlide } from './DataSlide';
import { MemberData } from './DataMember';

import background from '../../assets/team-photo.jpg'
import image1 from '../../assets/1-4-1024x757.png.webp'
import image2 from '../../assets/2-3.png.webp'
import image3 from '../../assets/3-4.png.webp'
import image4 from '../../assets/4-4.png.webp'
import logo from '../../assets/review-logo.png.webp'

export interface IAboutProps {
}

export default function About(props: IAboutProps){
    return (
        <div>
            {/* background */}
        <div>
        {/* banner */}
        <div className="about-intro">
            <div className="photo-intro" style={{ backgroundImage: `url(${background})`}}>
            <div className="container-about">
                <div className="info-about">
                <h1 className="">Remote development you can trust</h1>
                <p>Mobile and Web applications built by real in-house teams</p>
                </div>
            </div>
            </div>
            </div>
            {/* features */}
            <div className="features">
                <div className="container">
                    <div className="image-features">
                        <img src='https://riseapps.co/wp-content/uploads/2018/12/improve-img.svg' alt=''/>
                    </div>
                    <strong >We strive to improve</strong>
                    <ul className="features-list">
                        <li>
                            <h3>The World</h3>
                            <p>Our apps make life easier</p>
                        </li>
                        <li>
                            <h3>Individually</h3>
                            <p>Every project is a chance to get better</p>
                        </li>
                        <li>
                            <h3>Team</h3>
                            <p>We are always initiative and responsive</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* our-way */}
            <div className="our-way">
                <div className="container">
                    <h2 className="animate">Our way</h2>
                    <div className="photos-box-wrap">
                    <div className="photos-box">
                        <div className="top-block">
                        <div className="description">
                            <strong>Work when it’s efficient</strong>
                            <p>Agile management gives us flexible schedules and allows us to work with maximum productivity. We always stay on top of deadlines, and we do it with joy.</p>
                        </div>
                        <div className="images-holder">
                            <div></div>
                            <div className="img1" style={{ backgroundImage: `url(${image1})`}}></div>
                        </div>
                        </div>

                        <div className="image-three">
                            <div className="img2" style={{backgroundImage: `url(${image2})`}}></div>
                            <div className="img3" style={{backgroundImage: `url(${image3})`}}></div>
                            <div className="img3" style={{backgroundImage: `url(${image4})`}}></div>
                        </div>
                    </div>
                    <div className="photos-box inverse"></div>
                    <div className="photos-box"></div>
                    </div>
                </div>
            </div>

            {/* our-team */}
            <div className="our-team">
                <div className="container">
                    <h2>Key Riseappers</h2>
                    <ul className='team'>
                        {MemberData.map((item)=>(
                            <li>
                                <div className='team-item'>
                                    <img className='team-img' src = {item.img} alt=""/>        
                                <div className="team-infor">
                                    <strong>{item.name}</strong>
                                    <span>{item.job}</span>
                                </div>
                                </div> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* slider */}
            <div className="testimonials-holder">
                <div className="container">
                    <div className="testimonials">
                        <Slider
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            speed={1000}
                            infinite={true}
                            fade={true}
                            autoplay={true}
                        >
                            {DataSlide.map((item)=>(
                                <div className="testimonials-slider">
                                <div className="avatar-holder">
                                  <div className="avatar" style={{ backgroundImage: `url(${item.avatar})` }}></div>
                                </div>
                                <blockquote>
                                  <p>{item.title}</p>
                                  <a href='/' className="full-review">
                                    <img loading='lazy' src={logo} alt=''/>
                                    Full Review
                                  </a>
                                </blockquote>
                                <div className="author-details">
                                  <cite>{item.name}</cite>
                                  <span className="post">Ruggengraat co-founder1</span>
                                </div>
                              </div>
                            ))}                    
                        </Slider>
                        <a href='/' className="button-project">Start My Project</a>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

