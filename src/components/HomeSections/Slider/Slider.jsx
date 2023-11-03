import React from 'react'
import './Slider.scss'
import Logo_images1 from '../../../assets/HomeImages/Logo1.png'
import Logo_images2 from '../../../assets/HomeImages/Logo2.png'
import Logo_images3 from '../../../assets/HomeImages/Logo3.png'
import Logo_images4 from '../../../assets/HomeImages/Logo4.png'
import Logo_images5 from '../../../assets/HomeImages/Logo5.png'

const Slider = () => {

    const imagePaths = [
      Logo_images1,
      Logo_images2,
      Logo_images3,
      Logo_images4,
      Logo_images5,
      Logo_images1,
      Logo_images2,
      Logo_images3,
      Logo_images4,
      Logo_images5,
      Logo_images1,
      Logo_images2,
      Logo_images3,
      Logo_images4,
      Logo_images5,
    ];
  
    return (
      <div className="container">
        <div className="slider">
          <div className="slide-track">
            {imagePaths.map((imagePath, index) => (
              <div className="slide" key={index}>
                <img src={imagePath} alt="logos of partnerships" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Slider;