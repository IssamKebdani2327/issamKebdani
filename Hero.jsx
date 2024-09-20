/* eslint-disable react/no-unescaped-entities */

import './Hero.css' ;
import img from '../../assets/IMG_20240105_162928_491.jpg'

function Hero () {

    return (
        <div className="hero">
            <img src={img} />
            <h1>
                <span>I'm Issam kebdani, </span>
                frontend  developer based in Algeria
            </h1>
            <p>
                I am a frontend developer from algeria with1 years of experience in multiple companies like google , apple and tesla
            </p>
            <div className="button-content">
                <a href="#contact">
                    <button className='contact-button'>
                        Contact With ME
                    </button>
                </a>
                <button className='resum'>
                    My resume
                </button>
            </div>
        </div>
    )
}


export default Hero ;