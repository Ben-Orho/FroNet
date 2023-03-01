import React from 'react'
import frame40 from "../../assets/Frame-40.svg"
import Circlecheck from "../../assets/check-circle.svg"
import "./Packages.css"

const Packages = () => {
  return (
    <div className='packages-container'>
        <p>PACAKGES</p>
        <h1>choose your package</h1>
        <div className='card'>
            <div className='FroDay' id='card-frame'>
                <h2>₦400<span className='grey'>/Day</span></h2>
                <h2>FroDay</h2>
                <img src={frame40}/>
                <p className='people'>236+ people using this Package</p>
                <hr/>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p>₦400 for <span>24 hours</span></p>
                </div>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p><span>One </span>free hour</p>
                </div>
                <button>subsribe now </button>
                <a href='#' className='pacakges-view'>view all Packages</a>
            </div>
            <div className='FroWeek' id='card-frame'>
            <h2>₦2300<span className='grey'>/week</span></h2>
                <h2>FroWeek</h2>
                <img src={frame40}/>
                <p className='people'>236+ people using this Package</p>
                <hr/>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p>₦2300 for <span>7 days</span></p>
                </div>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p><span>Two </span>free hours</p>
                </div>
                <button>subsribe now </button>
                <a href='#' className='pacakges-view'>view all Packages</a>
            </div>
            <div className='FroMonth' id='card-frame'>
            <h2>₦8,000<span className='grey'>/Month</span></h2>
                <h2>FroMonth</h2>
                <img src={frame40}/>
                <p className='people'>236+ people using this package</p>
                <hr/>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p>₦8,000 for <span>28 days</span></p>
                </div>
                <div className='check'>
                    <img  src={Circlecheck} alt="main-check-circle"/>
                    <p><span>Eight </span>free hours</p>
                </div>
                <button>subsribe now </button>
                <a href='#' className='pacakges-view'>view all Packages</a>
            </div>
        </div>

    </div>
  )
}

export default Packages