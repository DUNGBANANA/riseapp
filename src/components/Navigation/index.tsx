import * as React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/LM Software-04.jpg'
import './styled.scss'
export interface INavigationProps {
}

export default function Navigation (props: INavigationProps) {
  return (
    <header className="header transparent home" style={{backgroundColor: "transparent ; right: 0px"}}>
        <div className="container">
          <strong className="logo">
            <Link to="/home">
              <img src={logo} alt=''/>
            </Link>
          </strong>
          <ul className="add-menu">
            <li className='nav-item'>
              <a href="/">Cases</a>
            </li>
            <li className='nav-item'>
              <a href="/">Services</a>
            </li>
            <li className='nav-item'>
              <Link to="/recruitment">Recruiment</Link>
            </li>
            <li className='nav-item'>
              <a href="/">Technologies</a>
            </li>
            <li className='nav-item'>
              <a href="/" >Blog</a>
            </li>
            <li className='nav-item'>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <a href="/" className="button-btn">Contact Us</a>
        </div>
    </header>
  );
}
