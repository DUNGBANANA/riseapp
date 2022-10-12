import React from 'react';
import './main.scss'
import teampicture from '../../assets/team.png.webp'
export default function Ourteam(){
    return (
        <div className='meet-our-team'>
            <div className="container">
                <div className="short-infor">
                    <strong className="block-title">Ourteam</strong>
                    <h2>Mobile and Web Development Team</h2>
                    <p>We are always straightforward - either it’s our teammate or our client. Because for a collaboration to be productive, everyone on the team has to be on the same page. We are always there for you on your way to creating outstanding apps.</p>
                    <a href="/" className='button'>Get to know us</a>
                </div>
                <div className="photo">
                    <img src={teampicture} alt="Riseapps team" />
                </div>
            </div>
            
        </div>
    );
};

