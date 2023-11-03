import React from 'react'

const BoxFeatures = ({image, title, text}) => {
  return (
    <div className="box">
        <div className="box-image">
            <img src={image} alt="business advice" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
     </div>
  )
}

export default BoxFeatures