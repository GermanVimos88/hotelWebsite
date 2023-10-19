import React from 'react'
import './download.css'

const Download = () => {
  return (
    <>
        <section className='download top'>
          <div className='container flex_space'>
            <div className='row'>
              <h3>Descarga nuestra app</h3>
              <h1>Puedes obtener esta plantilla para tu móvil</h1>
              <ul>
                <li>&#10003; Find nearby hotel in your network with templete</li>
                <li>&#10003; Get paperless confirmation</li>
                <li>&#10003; Make changes whenever, wherever</li>
                <li>&#10003; 24/7 customer service in more than 40 languages</li>
                <li>&#10003; No booking or credit card fees</li>
                <li>&#10003; No booking or credit card fees</li>
                <li>&#10003; Add your own reviews and photos</li>
              </ul>
              <div className='img flex'>
                <img src='/images/appstore-button.png' alt='' />
                <img src='/images/google-play-button.png' alt='' />
              </div>
            </div>
            <div className='row row2'>
              <img src='/images/app-image-1.png' alt='' /> 
            </div>
          </div>
        </section>
    </>
  )
}

export default Download