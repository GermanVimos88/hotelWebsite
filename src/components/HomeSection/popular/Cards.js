import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import PopularData from './PopData'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const Cards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,        
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0,              
            },
          },
        ],
      };

  return (
    <>
        <Slider {...settings}>
        
        {PopularData.map((value) => {
            return(        

        
            <div className='cards'>
                <div className='item'>
                    <div className='image'>
                        <img src={(value.image)} alt='' />
                        <i className='fas fa-map-marker-alt'></i>{"  "}
                        <label>{value.country}</label>                        
                    </div>

                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>

                    </div>
                    <div className='details'>
                        <h2>{value.name}</h2>
                        <div className='boarder'></div>
                        <h3>
                            {value.price} / <span>Por noche</span>
                        </h3>
                        

                    </div>


                </div>
            </div>
            
           )
        })}

        </Slider>    
    </>
  )
}

export default Cards