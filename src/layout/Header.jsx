import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VscClose, VscMenu } from "react-icons/vsc";
import {ReactComponent as MyLogo} from "../assets/logo_me.svg";
import './style.css';
import ThemeToggle from '../components/themetoggle/ThemeToggle';
import styled from 'styled-components';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoGithub,   } from "react-icons/bi";
import { RiKakaoTalkFill   } from "react-icons/ri";
import { AiOutlineCopyrightCircle   } from "react-icons/ai";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
     setIsActive(!isActive);
  }  

    const [Load, setLoad] = useState(false);
    useEffect(() => {
    setTimeout(() => {
        setLoad(true);
    }, 700);
    return () => setLoad(false);
    }, [])


    return (
    <>
        <header className="fixed-top site__header">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="navbar-brand nav_ac1">
                    <MyLogo width="150" height="40" />
                </Link>
                <div className="d-flex align-items-center top-right-nav">
                    <span>
                        <ThemeToggle />
                    </span>
                    <button className="menu__button nav_ac2" onClick={handleToggle}>
                        {isActive ? <VscMenu /> : <VscClose />}
                    </button>
                </div>
            </div>

          <div className={`${isActive ? "" : "menu_opend"} site__navigation`}>
              <div className="bg__menu h-100">
                   <div className="menu_wrapper">
                       <div className="menu__container p-3">
                           <ul className="the_menu">
                              <li className="menu_item">
                                  <Link onClick={handleToggle} 
                                        to="/"
                                        className="my-3">
                                   Home
                                  </Link>
                              </li>   
                              <li className="menu_item"> 
                                  <Link onClick={handleToggle} 
                                        to="/portfolio"
                                        className="my-3">
                                   Project
                                  </Link>
                              </li>
                              <li className="menu_item">    
                                  <Link onClick={handleToggle} 
                                        to="/about"
                                        className="my-3">
                                   About
                                  </Link>
                              </li>
                              <li className="menu_item">    
                                  <Link onClick={handleToggle} 
                                        to="/contact"
                                        className="my-3">
                                   Contact
                                  </Link>
                              </li>
                           </ul>
                       </div>
                   </div>
              </div>
        </div> 
    </header>
    <div className="br-top"></div>
    <div className="br-bottom"></div>
    <div className="br-left"></div>
    <div className="br-right"></div>
    </>
    );
};

export default Header


