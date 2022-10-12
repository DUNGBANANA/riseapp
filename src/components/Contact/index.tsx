import * as React from 'react';
import './main.scss'
export interface IContact{

}
export default function Contact(props: IContact) {
    return (
        <div className="section-contact">
            <div className="container-none"></div>
            <div className="container">
                <div className="contact-us_holer">
                    <div className="contact-form">
                        <div>
                            <div className="screen-reader-responses"></div>
                            <form action="" className="contacts-old__form">
                                <p>
                                    <span className="title">Drop us a line</span>
                                </p>
                                <div className="contacts-old">
                                    <div className="contacts-old__form-row">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <span className="full-name">
                                                <input type="text" placeholder='Full Name*'></input>
                                            </span>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    <p></p>
                                    </div>
                                    <div className="contacts-old__form-row">
                                        <div className="contacts-old__form-col">
                                            <div className="emailaddress">
                                            <span className="email">
                                                <input type="email" placeholder='Email*'></input>
                                                
                                            </span>
                                            <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        <p></p>
                                        <div className="contacts-old__form-col">
                                            <div className="phone">
                                                <span className="phone">
                                                    <input type="tel" placeholder='Phone*' />
                                                    
                                                </span>
                                                <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="contacts-old__form-row">
                                        {/* <div className="contacts-old__form-col"> */}
                                            <div className="form-group">

                                            <div className="input-box">
                                                <textarea name="message" id="message" placeholder='Tell us about your project*'></textarea>

                                            </div>
                                            {/* </div> */}
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    <p></p>
                                    <div className="contacts-old__form-row mod">
                                        <div className="contacts-old__form-col">
                                            <div>
                                                <label className="checkbox">
                                                    <span className='check-span'>
                                                        <span>
                                                            <input  type="checkbox" id='cntctus_policy'/>
                                                            <span className="list-item-label">I Accept Privacy Policy</span>
                                                        </span>
                                                    </span>
                                                    <p></p>
                                                    <p></p>
                                                </label>
                                            </div>

                                            <div>
                                                <label className="checkbox">
                                                        <span className='check-span'>
                                                            <span>
                                                                <input type="checkbox" id='cntctus_nda'/>
                                                                <span className="list-item-label">Send me NDA</span>
                                                            </span>
                                                        </span>
                                                        <p></p>
                                                        <p></p>
                                                </label>
                                            </div>
                                            <p></p>
                                        </div>
                                        <div className="contacts-old__form-col">
                                            <div className="button-send">
                                                <a href="/" id="my-send">Send</a>                                      
                                            </div>                         
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://riseapps.co/wp-content/uploads/2021/02/d_f.png" alt="" className=' lazyloaded'/>
                    </div>
                </div>
            </div>
        </div>
    )
}