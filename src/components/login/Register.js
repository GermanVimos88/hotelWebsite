import React, { useState } from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'

import "./design.css"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { name: name, email: email, password: password, cpassword: cpassword }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setName("")
    setEmail("")
    setPassword("")
    setCpassword("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Crea una nueva cuenta </p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' required />
              <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirmar contraseña' required />

              <button type='submit' className='primary-btn'>
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Cuenta creada satisfactoriamente</h1>
                <h3>
                  Nombre : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Contraseña : <p>{cureentValue.password}</p>
                </h3>
                <h3>
                  Confirmación contraseña : <p>{cureentValue.cpassword}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Register