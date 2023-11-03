import React from 'react'
import './OurServices.scss'

const ServiceTarget = ({title, text, url}) => {
  return (
    <div className="tarjet">
        <hr/>
        <h4>{title}</h4>
        <p>{text}</p>
        <a href={url} target='_blank' ><i className="fi fi-sr-arrow-circle-right"></i></a>
   </div>
  )
}

export default ServiceTarget