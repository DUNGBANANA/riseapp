import React from 'react';
import './style.scss'
import { DATA_RATE_INFO} from './Banner-infor'
import RateInfoItem from './BannerInfor';

export default function Banner(){
    return (
        <div className='background'>
            <div className="container-banner">
                <div className="short-infor">
                    <strong className="h1">Create. Grow. Beat. Repeat.</strong>
                    <h1>Product development teams for startups and SMBs</h1>
                    <a href="/" className="button">Let's talk</a>
                </div>
                <div className="rate-info">
                <ul>
                        {
                            DATA_RATE_INFO.map((rateInfoItem:any, index:any) => {
                                return <RateInfoItem key={index} rateInfoItem={rateInfoItem} index={index} />
                            })
                        }
                    </ul>                   
                </div>
            </div>
        </div>
    );
};

