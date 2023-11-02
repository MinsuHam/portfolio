import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { logotext, meta, introdata } from '../data/portfolio';
import styled from 'styled-components';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoGithub,   } from "react-icons/bi";
import { RiKakaoTalkFill   } from "react-icons/ri";
import { AiOutlineCopyrightCircle   } from "react-icons/ai";

const Home = () => {
  return (
    <HelmetProvider>
       <section id="home" className="home">
         <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title} </title>
            <meta name="description" content={meta.description} /> 
         </Helmet>
         
         <div className="d-block 
                         d-lg-flex 
                         align-items-center 
                         justify-content-between
                         ">

            <div className='col-lg-2'>
                <StyledHeader className="ml-2">
                    <ul>
                        <li>
                            <Link to="/">
                                <span>
                                    <i><BiLogoFacebookSquare/></i>
                                    <p>Facebook</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>
                                    <i><BiLogoInstagramAlt/></i>
                                    <p>Instagram</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>
                                    <i><BiLogoGithub/></i>
                                    <p>Github</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>
                                    <i><RiKakaoTalkFill/></i>
                                    <p>KakaoTalk</p>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </StyledHeader>
            </div>
            <div className="col-lg-5 col-12 ps-5">
               <h2 className="ms-5">{introdata.title}</h2>
               <h1 className="ms-5 mb-5">
                 <Typewriter 
                    options={{
                        strings: [
                           introdata.animated.first,
                           introdata.animated.second,
                           introdata.animated.third 
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 100 
                  }}
               />
               </h1>
               <p className="ms-5">
                  {introdata.description}
               </p>
               <div className="mt-4 ps-5 btn-box">
                  <Link to="/portfolio" className="btn btn-warning me-4 px-4">
                     MyPortfolio
                  </Link>
                  <Link to="/contact" className="btn btn-outline-warning px-4">
                     Contact Me
                  </Link>
               </div>
            </div>
            <div className="col-lg-5 col-12 text-center">
               <div id="sparkle"></div>
            </div>
         </div>



        <div className="menu__footer 
                                d-flex 
                                flex-column 
                                flex-md-row 
                                justify-content-between
                                align-items-md-center
                                position-absolute
                                w-100
                                p-2"
                >
        <p className="copyright">copyright<AiOutlineCopyrightCircle/></p>
            
        </div>
    </section>
</HelmetProvider>    
  )
}

export default Home

const StyledHeader = styled.header `
	position: relative;
	right: 0px;
	top: 60px;
	bottom: 0;
	z-index: 1001111;
	opacity: 1;
    color: #fff;
	&.on {
		top: 0;
		opacity: 1;
		transition: all 0.85s;
	}
	ul {
		display: block;
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		height: 100%;
		li {
			position: relative;
			&:not(:last-child) {
				margin: 0 0 20px 0;
			}
			&.active {
				a {
					background-color: #3a3434;
                    opacity: 0.5;
				}
			}
			a {
				display: inline-block;
				padding: 13px 14px;
				border-radius: 30px;
				background: #3a3434;
				transition: all 0.2s;
				span {
					position: relative;
					right: 0px;
					display: inline-block;
					opacity: 1;
					font-size: 16px;
					font-weight: 600;
					letter-spacing: 0.5px;
					line-height: 1.2;
					text-transform: uppercase;
					vertical-align: text-top;
					transition: opacity 0.3s ease, padding 0.3s ease;
					color: #fff;
                    padding: 0;
				}
                &:hover {
                    span{
                        position: relative;
                        right: 0px;
                        display: inline-block;
                        opacity: 1;
                        font-size: 20px;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                        line-height: 1.2;
                        text-transform: uppercase;
                        vertical-align: text-top;
                        transition: opacity 0.3s ease, padding 0.3s ease;
                        color: #fff;
                        padding: 0;
                    }
                }
				i {
					width: 50px;
					height: 50px;
                    opacity: 1;
					font-size: 40px;
					text-align: center;
					line-height: 25px;
				}
                p {
                    display: inline-block;
                    opacity: 0;
                    width: 10px;
                    height: 15px;
                    font-size: 15px;
                    text-align: center;
                    line-height: 20px;
                    overflow: hidden;
                    align-items: center;

                }
                &:hover {
                    p {
                        display: inline-block;
                        opacity: 1;
                        width: 100px;
                        height: 20px;
                        font-size: 15px;
                        text-align: left;
                        line-height: 20px;
                        align-items: center;
                        transition: opacity 0.3s ease, padding 0.3s ease;
                    }
                }
            }
        }
    }
`;