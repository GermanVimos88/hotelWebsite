import React, { useState } from 'react'
import './Contact.css'

const ContactFrom = () => {
    const [fname, setFname] = useState('')    
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = {fname, lname, phone, email, subject, company, message }
        setAllValue([ ...allValue,newValue])

        setFname('')
        setLname('')
        setPhone('')
        setEmail('')
        setSubject('')
        setCompany('')
        setMessage('')
    }

  return (
    <>
        <section className='contact mtop'>
            <div className='container flex'>
                <div className='main-content'>
                    <h2>Contacto desde</h2>
                    <p>Ingresa tus datos en el formulario</p>

                    <form onSubmit={formSubmit}>
                        <div className='grid1'>
                            <din className='input'>
                                <span>
                                    Nombre: <label>*</label>
                                </span>
                                <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                            </din>

                            <din className='input'>
                                <span>
                                    Apellido: <label>*</label>
                                </span>
                                <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                            </din>

                            <din className='input'>
                                <span>
                                    Teléfono: <label>*</label>
                                </span>
                                <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </din>

                            <din className='input'>
                                <span>
                                    Email: <label>*</label>
                                </span>
                                <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </din>

                            <din className='input'>
                                <span>
                                    Asunto:
                                </span>
                                <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </din>

                            <din className='input'>
                                <span>
                                    Compañía: 
                                </span>
                                <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                            </din>
                        </div>

                            <din className='input inputlast'>
                                <span>
                                    Mensaje: <label>*</label>
                                </span>
                                <textarea name='message' value={message} cols='30' rows='10' onChange={(e) => setMessage(e.target.value)}></textarea>
                            </din>

                        <button className='primary-btn'>Enviar</button>

                    </form>
                </div>

                <div className='side-content'>
                    <h3>Visita nuestra locación</h3>
                    <p>Lorem ipsum siia juu ain wesdn fortme sren </p>
                    <br />
                    <h3>Escríbenos</h3>
                    <span>info@example.com</span>
                    <br />
                    <span>+012 654 76698</span>
                    <br />

                    <div className='icon'>
                        <h3>Síguenos</h3>
                        <div className='flex_space'>
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-pinterest'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='show-data'>
            {allValue.map((currentValue) => {
                const { fname, lname, phone, email, subject, company, message } = currentValue
                return(
                
                    <div className='sign-box'>
                        <h1>Enviado satisfactoriamente</h1>
                        <h3>Nombre: <p>{fname}</p></h3>
                        <h3>Apellido: <p>{lname}</p></h3>
                        <h3>Teléfono: <p>{phone}</p></h3>
                        <h3>Email: <p>{email}</p></h3>
                        <h3>Asunto: <p>{subject}</p></h3>
                        <h3>Compañía: <p>{company}</p></h3>
                        <h3>Mensaje: <p>{message}</p></h3>
                    </div>
            )
        })}
        </section>


    </>
  )
}

export default ContactFrom