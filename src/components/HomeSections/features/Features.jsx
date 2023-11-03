import './Features.scss'
import React from 'react'
import BoxFeatures from './BoxFeatures'
import Buttons from '../../Buttons'
import Business_image from '../../../assets/HomeImages/Business-Advice.png'
import Business_image2 from '../../../assets/HomeImages/Startup-Business.png'
import Business_image3 from '../../../assets/HomeImages/Business-Advice.png'
import Business_image4 from '../../../assets/HomeImages/financial-advice.png'

const Features = () => {
  return (
    <div className="container parent">
        <div className="features">
            <div className="features-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Buttons type='' url='/service' text='Learn More'/>     
            </div>
        </div>
        <div className="boxes">

            <BoxFeatures image={Business_image} title='Business Advice' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <BoxFeatures image={Business_image2} title='Startup Business' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <BoxFeatures image={Business_image3} title='Financial Advice' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <BoxFeatures image={Business_image4} title='Risk Management' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>

        </div>
    </div>
  )
}

export default Features