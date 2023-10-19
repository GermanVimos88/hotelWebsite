import React, { useState } from 'react'
//import "../gallery/Gallery.css"
//import "./Destinations.css"
import Dcard from './Dcard'
import Sdata from './Sdata'

const Allitem = () => {
    const [items, setItem] = useState(Sdata)
  return (
    <>
        <section className='gallery desi mtop'>
            <div className='container'>
                <div className='content grid'>
                    {items.map((item) => {
                        return <Dcard key={item.id} item={item} />
                    })}
                </div>
            </div>
        </section>    
    </>
  )
}

export default Allitem