import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
    <>
        <nav className='navbar'>
            <div className='container flex_space'>
                <div className='meni-icon' onClick={handleClick} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} > </i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <li><Link to='/' onClick={closeMobileMenu} >Home</Link> </li>
                        <li><Link to='/about' onClick={closeMobileMenu} >About</Link> </li>
                        <li><Link to='/gallery' onClick={closeMobileMenu} >Galería</Link> </li>
                        <li><Link to='/destination' onClick={closeMobileMenu} >Destino</Link> </li>
                        <li><Link to='/blog' onClick={closeMobileMenu} >Blog</Link> </li>
                        <li><Link to='/testimonial' onClick={closeMobileMenu} >Testimonios</Link> </li>
                        <li><Link to='/contact' onClick={closeMobileMenu} >Contáctanos</Link> </li>
                    </li>
                </ul>
                <div className='login-area flex'>
                
                    <li>
                        <i className='fas fa-sign-in-alt'></i>                        
                        <Link to='/sign-in'>                        
                            Sign In    
                        </Link>
                    </li>
                    
                    <li>                        
                        
                        <Link to='/register'>
                        <i className='fa fa-chevron-right'></i>
                            Registro
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <button className='primary-btn'>Requerimiento</button>
                        </Link>
                    </li>

                </div>
            </div>
        </nav>

        <header>
            <div className='container flex_space'>
                <div className='logo'>
                    <img src='images/logo.png' className='l-logo' alt=''/>
                </div>

                <div className='contact flex_space'>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-clock'></i>
                        </div>
                        <div className='text'>
                            <h4>Nuestros horarios</h4>
                            <Link to='/contact'>Lunes - Domingo: 8:00am to 6:00pm</Link>
                        </div>
                    </div>

                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='fas fa-phone-volume'></i>
                        </div>
                        <div className='text'>
                            <h4>Call Us Hours</h4>
                            <Link to='/contact'>+014 899 670123</Link>
                        </div>
                    </div>

                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-envelope'></i>
                        </div>
                        <div className='text'>
                            <h4>Email</h4>
                            <Link to='/contact'>info@example.com</Link>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    </>
  )
}

export default Navbar