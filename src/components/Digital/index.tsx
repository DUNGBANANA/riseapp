import React from 'react';
import './main.scss'
import { DATADIGITAL } from './Datadigital';
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import icon6 from '../../assets/icon6.svg'


export default function Digital(){
    return (
        <div className='digital-infor'>
            <div className="container">
                <h2>Road so far</h2>
                <ul className="digital-infor-list">
                    {DATADIGITAL.map((item)=>(                        
                        <li>
                            <strong>
                                <strong className='counter-value'>{item.rate}</strong>
                            </strong>
                                {item.title}           
                        </li>
                    ))}
                </ul>
                <div className="features-info-list">
                    <ul className="collapse-list">
                        <li className="item">
                            <div className="icon">
                                <img src={icon1} alt="" />
                            </div>     
                            Only senior and middle software engineers                            
                        </li>
                        <li className="item">
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>         
                            Only senior and middle software engineers                            
                        </li>
                        <li className="item">
                            <div className="icon">
                                <img src={icon3} alt="" />
                            </div>        
                            Only senior and middle software engineers                            
                        </li>
                        <li className="item">
                            <div className="icon">
                                <img src={icon4} alt="" />
                            </div>            
                            Only senior and middle software engineers                            
                        </li>
                        <li className="item">
                            <div className="icon">
                                <img src={icon5} alt="" />
                            </div> 
                            Only senior and middle software engineers                            
                        </li>
                        <li className="item">
                            <div className="icon">
                                <img src={icon6} alt="" />
                            </div>     
                            Only senior and middle software engineers                            
                        </li>
                    </ul>
                    <div className="show-more"></div>
                </div>
            </div>
            
        </div>
    );
};

