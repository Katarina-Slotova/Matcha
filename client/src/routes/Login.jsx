import React, { useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from '../reducers/userReducer'

const LoginForm = ({ setToken }) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const user = useSelector(({ user }) => user)

  const login = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    try {
      const response = await axios.post('http://localhost:3005/login', {
        email,
        password,
      })
      // console.log(`login submit email: ${email}`)
      // console.log(`login submit response.data.id: ${response.data.user}`)
      // const test = response.data.user
      // console.log(`test response: ${test.id}`)
      event.target.email.value = ''
      event.target.password.value = ''

      if (response.status === 201) {
        // const test = response.data.user
        // console.log(`test response: ${test}`)
        dispatch(initializeUser(response.data.user.id))
        console.log(`login submit user id: ${user.id}`)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="gradient-custom">
      <h1 className="text-light landing-heading">Log in to your account</h1>
      <section className="vh-100">
        <div className="container py-6 h-50">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
                  <Form onSubmit={login}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <FormControl
                          type="email"
                          name="email"
                          id="email"
                          className="form-control form-control-lg"
                          // onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <FormLabel className="form-label" htmlFor="email">
                          Email
                        </FormLabel>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <FormControl
                          type="password"
                          name="password"
                          id="password"
                          className="form-control form-control-lg"
                          // onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <FormLabel className="form-label" htmlFor="password">
                          Password
                        </FormLabel>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="col btn btn-purple-moon btn-lg"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  )
}

export default LoginForm
