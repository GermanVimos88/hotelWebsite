import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BlogData from '../BlogData'
import EmptyFile from '../../../common/EmptyFile/EmptyFile'
import HeadTitle from '../../../common/HeadTitle/HeadTitle'
//import Allitem from '../components/destinations/Allitem'


const BlogSingle = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = BlogData.find((item) => item.id === parseInt(id))
        
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
                    <Link to='/blog' className='primary-btn back'>
                        <i className='fas fa-long-arrow-alt-left'></i> Regresar
                    </Link>

                    <article className='content flex'>
                        <div className='main-content'>
                            <img src={item.cover} alt=''></img>
                            

                            <div className='category flex_space'>
                                <span>{item.date}</span>
                                <label>{item.category}</label>
                            </div>

                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>

                            <h2>Dos columnas de texto</h2>
                            <div className='category flex_space'>
                                <p>{item.para}</p>
                                <p>{item.para}</p>
                            </div>
                            
                        </div>

                        <div className='side-content'>
                            <div className='category-list'>
                                <h2>Categoría</h2>
                                <hr/>

                                <ul>
                                    {BlogData.map((item) => {
                                        return (
                                            <li>
                                                <i className='far fa-play-circle'></i>
                                                {item.category}
                                            </li>
                                        )
                                    })}
                                </ul>
                            
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

export default BlogSingle