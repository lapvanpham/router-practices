import React from 'react'
import "../styles/login.styles.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [form, setForm] = useState({ username: "admin", password: "" })
  const { username, password } = form;
  let navigate = useNavigate()  // useNavigate() is a hook

  const handleChange = function (event) {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  function authenticate(event) {
    event.preventDefault()
    console.log("Authenticating")
    if (username === "admin" && password === "admin") {
      console.log("Authenticated")
      navigate("/")
    }
  }

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={handleChange} name="username" />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handleChange} name="password"/>
      </label>
      <button onClick={authenticate}>Submit</button>
    </form>
  )
}

export default Login;