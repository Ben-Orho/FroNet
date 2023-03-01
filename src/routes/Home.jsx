import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import  Frame from "../components/Frame/Frame"
import Packages from '../components/packages/Packages'
import illustration from "../assets/illustration.svg"
import "../components/styles/Home.css"
import Partandspons from '../components/Partnerandsponsors/Partandspons'
import Faqs from '../components/How/Faqs'


const Home = () => {
  return (
    <div className="container">
        <NavBar/>
        <div className="hero-section">
            <div className="hero-text">
                <h1 className="explore-text">
                    Explore the world, browse limitlessly and chill
                </h1>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, maiores?</p>
                <button>Explore Away</button>
            </div>
            <div classNam="hero-picture">
                <img src={illustration} alt="main illustration"/>
                
            </div>
        </div>
        <div className='special'>
        <p>ABOUT US</p>
        <h1>What makes us special</h1>
        <p className='lorem-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit deserunt, iure quasi suscipit pariatur vitae et. Totam temporibus dicta praesentium quibusdam quasi molestias mollitia, quod sequi sunt eaque? Deleniti.</p>
        </div>
        <Frame/>
        <Packages/>
        <Faqs/>
        <Partandspons/>
        <Footer/>
    </div>
  )
}

export default Home