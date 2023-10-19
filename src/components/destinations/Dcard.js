import React from 'react'
import { Link } from 'react-router-dom'

const Dcard = ({ item: { id, image, title, desc, sidepara, paraImage_one, paraImage_two } }) => {
  return (
    <>
        <div className='items'>
            <div className='img'>
              <img src={image} alt='Gallery Image'></img> 
                
              
            </div>

            

            <div className='title'>
                <Link to={`/singlepage/${id}`} className='blogItem-link'>                
                  <h3>{title}</h3>
                  
                </Link>
            </div>
        </div>
    </>
  )
}

export default Dcard