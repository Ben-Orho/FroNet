import React from 'react'
import  styles from "./Gsap.module.css"
import Leftquote from "../../../assets/quote-alt-left.svg"
import Ratings from "../../../assets/starrating.svg"
import Avatar from "../../../assets/avatar1.svg"

const Gasp = () => {
  return (
    <div className={styles.content}>
        <div className='testimonial'>
            <div className={styles.container}>
                <div>
                    <img src={Leftquote}/>
                </div>
                <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium consequatur accusamus fugiat nulla autem,
                         sunt quas in architecto non.
                          Ducimus officiis adipisci deserunt! At, velit?</p>
                </div>
                <div className={styles.img}>
                    <img src={Avatar} alt="avatar" />
                    <h3>Tejumade Olomola</h3>
                    <p>ile-ife,Osun State</p>
                    <img src={Ratings} alt="Ratings" />
                </div>
            </div>
        </div>
        <div className='testimonial'>
            <div className={styles.container}>
                <div>
                    <img src={Leftquote}/>
                </div>
                <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium consequatur accusamus fugiat nulla autem,
                         sunt quas in architecto non.
                          Ducimus officiis adipisci deserunt! At, velit?</p>
                </div>
                <div className={styles.img}>
                    <img src={Avatar} alt="avatar" />
                    <h3>Tejumade Olomola</h3>
                    <p>ile-ife,Osun State</p>
                    <img src={Ratings} alt="Ratings" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Gasp