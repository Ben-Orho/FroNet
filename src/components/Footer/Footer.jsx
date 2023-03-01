import React from 'react'
import "./Footer.css"
import niglogo from "../../assets/NIGERIANLOGO.svg"
import {TwitterLogo,InstagramLogo, FacebookLogo, WhatsappLogo,Copyright,} from 'phosphor-react'
function Footer() {
  return (
    <div className="footer-container mt-30"> 
        <h5>NEWSLETTER</h5>
        <h2>Get new offer’s on your email</h2>
        <p>insert your email address and get started</p>
        <div className="input-field">
            <input className="text-field" type="text" placeholder="Enter email address"/>
            <button className="btn-field">send</button>
        </div>
        <div className="foot-container">
            <div className="flex-container">
            <div className="findus" id="flex">
                <h3>Find Us</h3>
                <p>suite 17, LSDPC office
                    complex, pen Cinema,
                     Agege,Lagos
                </p>
            </div>
            <div className="GetinTouch" id="flex">
                <h3>Get in Touch</h3>
                <p>+234 903 690 8590<br/>
                   +234 803 300 0090,<br/>
                    fronet@gmail.com
                </p>
            </div>
            <div className="More" id="flex">
                <h3>More</h3>
                <p>careers<br/>
                   Fronet credits<br/>
                    partner with us
                </p>
            </div>
            <div className="nig-logo" id="flex">
                <img src={niglogo} alt="" />
            </div>
            </div>

            <div className="footer-link-container">
                <a>
                <TwitterLogo size={32} weight="fill"  />
                </a>
                <a>
                    <InstagramLogo size={32} weight="fill" />

                </a>
                <a>
                    
                    <WhatsappLogo size={32} weight="fill" />
                </a>
                <a>
                    
                    <FacebookLogo size={32} weight="fill" />
                </a>
            </div>
            <div className="privacy">
                <p>privacy policy</p>
                <p>Terms of Use</p>
            </div>
        </div>
        <div className="copyright">
        <Copyright size={32} weight="fill" />
        <p>2023 Fronet Africa. All Right Reserved</p>
        </div>
        

    </div>
  )
}

export default Footer