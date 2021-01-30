import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState()
    const history = useHistory()

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        if (form.username === 'zed' && form.password === '123') {
            history.push('/admin/allDishes')
        } else {
            alert('wrong creds')
        }
    }

    return (
        <section className="admin_login">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3>Admin login</h3>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">User Name</label>
                            <input type="text" name="username" className="form-control" onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">password</label>
                            <input type="password" name="password" className="form-control" onChange={handleInput} />
                        </div>
                        <div className="mb-3 d-grid">
                            <button onClick={handleClick} className="btn btn-theme">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
