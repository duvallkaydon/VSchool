import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(props) {
    const { login } = useAuth()
    const { error, setError, loading, setLoading } = props.value
    const userEmail = useRef()
    const userPass = useRef()
    const history = useHistory()
    
    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(userEmail.current.value, userPass.current.value)
            history.push('/')
        } catch {
            setError('Failed to Login')
        }

        setLoading(false)
    }

    return (
        <>
        <form>
            <h2>Login</h2>
            <p>{error}</p>
            <label>Email</label>
            <input type="email" ref={userEmail} required></input>
            <label>Password</label>
            <input type="password" ref={userPass} required></input>
            <button disabled={loading} onClick={handleSubmit}>Login</button>
        </form>
        <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
        </>
    )
}
