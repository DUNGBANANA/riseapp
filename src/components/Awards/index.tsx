import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import './main.scss'
import { DATA_AWARDS } from "./DataAwards";

export default function Awards(){
    return (
        <div>
            <div className='mention'>
                <div className="container">
                    <div className="mentions-holder">
                        <div className="text">
                            <h2>Awards</h2>
                            <p>Receiving rewards always encourages our team to work even harder to deliver great apps to our clients.</p>
                        </div>
                            <Slider
                                dots={true}
                                slidesToShow={3}
                                slidesToScroll={1}
                                speed={1000}
                                infinite={true}
                                // fade={true}
                                autoplaySpeed = {2000}
                                autoplay={true}
                                pauseOnHover = {true}
                            >
                                {DATA_AWARDS.map((item)=>(                                    
                                    <div>
                                        <div className="item">
                                            <a href="/"><img src={item.src} alt="" /></a>
                                        </div>
                                    </div>                            
                                ))}                    
                                </Slider>
                            </div>
                        </div>
                </div>
                <div className="collaborate">
                    <div className="h3">Ready to collaborate?</div>
                    <p>Drops us a line</p>
                </div>
        </div>
        
    );
};

