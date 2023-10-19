import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './design.css'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = { email, password }
        setAllValue([ ...allValue,newValue])

        
        setEmail('')
        setPassword('')
        
    }
  return (
    <>
        <HeadTitle />
        <section className='forms top'>
            <div className='container'>
                <div className='sign-box'>
                    <p>Ingresa tu email y contraseña para acceder</p>
                    
                    <form onSubmit={formSubmit}>                   
                    
                        <input type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className='flex_space'>
                            <div className='flex'>
                                <input type='checkbox' />
                                <label>Recordarme</label>
                            </div>
                            <div className='flex'>
                                <span>Olvidaste tu contraseña</span>
                            </div>
                        </div>
                            
                            <button type='submit' className='primary-btn'>
                                Acceder
                            </button>
                            <p>
                                ¿No posee una cuenta? <Link to='/register'>Regístrate</Link>
                            </p>
                    </form>
                </div>
            </div>
        </section>

        <section className='show-data'>
            {allValue.map((currentValue) => {
                const { email, password } = currentValue
                return(
                
                    <div className='sign-box'>
                        <h1>Enviado satisfactoriamente</h1>
                        
                        <h3>Email: <p>{email}</p></h3>
                        <h3>Password: <p>{password}</p></h3>                        
                    </div>
                    )
                })}
        </section>
    </>
  )
}

export default Login