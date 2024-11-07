import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'



const InfoBox = ({text, link, btnText}) => {
    return (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>  {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Victus</span>'👋
            <br />
            AR/VR/Game Developer from Lagos, Nigeria.
        </h1>
    ),
    2: (
        <InfoBox 
            text= "Successfully built multiple Augmented and Virtual Reality experiences"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Victus</span>'👋
            <br />
            AR/VR/Game Developer from Lagos, Nigeria.
        </h1>
    ),
    4: (
        <InfoBox 
        text= "Successfully built multiple Augmented and Virtual Reality experiences"
        link="/contact"
        btnText="Learn More"
    />
    ),
}


const HomeInfo = ({currentStage}) => {

  return (
    <>
        {renderContent[currentStage] || null}
    </>
  )
}

// const HomeInfo = ({ currentStage }) => {
//     return currentStage ? renderContent[currentStage] : null;
//   };
  

export default HomeInfo
