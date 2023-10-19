import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from './data'
import './gallery.css'

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    }

  return (
    <>
        <section className='collection'>
            <div className='container top'>
                <Slider { ...settings}>
                {data.map((value) => {
                    return (
                        <div className='box'>
                            <img src={value.cover} alt='' />                            
                        </div>
                    )
                })}
                </Slider>
            </div>
        </section>
    </>
  )
}

export default Gallery