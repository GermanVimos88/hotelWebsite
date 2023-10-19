import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import EmptyFile from '../common/EmptyFile/EmptyFile'
import HeadTitle from '../common/HeadTitle/HeadTitle'
//import Allitem from '../components/destinations/Allitem'
import Sdata from '../components/destinations/Sdata'
import "./SinglePage.css"



const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))
        
        if (item) {
            setItem(item)
        }
    }, [id])

  return (
    <>
        <HeadTitle />
        {item ? (        

            <section className='single-page top'>
                <div className='container'>
                    <Link to='/destination' className='primary-btn back'>
                        <i className='fas fa-long-arrow-alt-left'></i> Regresar
                    </Link>

                    <article className='content flex'>
                        <div className='main-content'>
                            <img src={item.image} alt=''></img>
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>

                            <div className='para flex_space'>
                                <p>{item.sidepara}</p>
                                <p>{item.sidepara}</p>
                            </div>
                            <h1>Acerca de la ciudad de {item.title}</h1>
                            <p>{item.desc}</p>

                            <div className='image grid1'>
                                <img src={item.paraImage_one} alt=''/>
                                <img src={item.paraImage_two} alt=''/>
                            </div>
                            <p>{item.desc}</p>
                        </div>

                        <div className='side-content'>
                            <div className='box'>
                                <h2>¿Podemos ayudarte?</h2>
                                <p>{item.sidepara}</p>
                                <button className='outline-btn'>
                                    <i className='fa fa-phone-alt'></i>
                                     Contáctanos
                                </button>
                            </div>

                            <div className='box2'>
                                <p>{item.sidepara}</p>
                            </div>

                        </div>

                    </article>

                </div>
            </section>
        ) : (
            <EmptyFile />
        )}
    </>
  )
}

export default SinglePage