import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>

        <HeadTitle />
        <section className='about top'>
            <div className='container'>
                <AboutCard/>
            </div>
        </section> 

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>
                        Our <span>Features</span>
                    </h1>
                    <p>lorem ipsum dolor sit amet consectetur adisipiong elit amet consetcut </p>
                    <p>lorem ipsum dolor sit amet consectetur adisipiong elit amet consetcut </p>
                    <br/>
                    <button className='primary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>  
                </div>
                <div className='row image'>
                    <img src='/images/feature-img-1.jpg' alt='' />
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>                  
                    </div>
                </div>
            </div>
        </section>   
    </>
  )
}

export default About