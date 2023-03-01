import React from 'react'
import "./Partandspons.css"
import boltshift from "../../assets/boltshift.svg"
import lightbox from "../../assets/lightbox.svg"
import featherdev from "../../assets/featherdev.svg"
import spherule from "../../assets/spherule.svg"
import globalbank from "../../assets/globalbank.svg"


const Partandspons = () => {
  return (
    <div className='content'>
        <p>partners and sponsors</p>
        <div className='fictional-company'>
            <img src={boltshift} alt="main-boltshift"/>
            <img src={lightbox} alt="main-lightbox"/>
            <img src={featherdev} alt="main-featherdev"/>
            <img src={spherule} alt="main-spherule"/>
            <img src={globalbank} alt="main-globalbank"/>
        </div>
    </div>
  )
}

export default Partandspons