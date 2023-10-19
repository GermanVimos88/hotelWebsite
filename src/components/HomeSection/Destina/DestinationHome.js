import React from 'react'
import Allitem from '../../destinations/Allitem'
import "../popular/MostPopular.css"

const DestinationHome = () => {
  return (
    <>
       <section className='popular top'>
           <div className='full_container'>
               <div className='heading'>
                   <h1>Destinos más populares</h1>
                   <div className='line'></div>
               </div>

               <div className='content'>
                   <Allitem />
               </div>
           </div>
       </section>
    </>
  )
}

export default DestinationHome