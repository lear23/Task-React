import React from 'react'
import ServiceTarget from './ServiceTarget'
import Decorative_line from '../../../assets/HomeImages/Element.png'
import Buttons from '../../Buttons'

const OurServices = () => {
  return (
    <section className="our-services">


            <div className="container">
                <div className="row-services">
                    <p>Our services</p>
                    <h2>We Provide The Best <br/> Service For Consulting</h2>
                </div>
                <div className="service">            
                    <ServiceTarget  title='Business Advice' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'
                        url='/services'/>
                    <ServiceTarget  title='Startup Business' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'
                        url='/services'/>
                    <ServiceTarget  title='Financial Advice' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'
                        url='/services'/>
                    <ServiceTarget  title='Risk Management' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'
                        url='/services'/>                  
                </div>
                <div className="center-content">
                    <Buttons type='transparent'  url='/services' text='Browse Service'/>
                </div>
                <div className="line">
                    <img src={Decorative_line} alt="a decorative line" />
                </div>
            </div>
    </section>

  )
}

export default OurServices