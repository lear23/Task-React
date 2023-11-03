import React from 'react'
import '../index.scss'

const Buttons = ({type, text, url}) => {

  const buttonColor = () => {

    switch(type) {
      case 'black':
        return 'btn-black'        
      case 'transparent':
        return 'btn-transparent'
      default:
        return 'btn-theme'
        
       
    }

  }

  return (

    <> 
            <a className={buttonColor()} href={url}>
                {text}
                <i className="mindre fi fi-br-arrow-up-right"></i> 
            </a>
        
    </>
  )
}

export default Buttons