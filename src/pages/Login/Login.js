import './Login.css';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const login = {
            email: email,
            password: password
        }

        axios.post('/auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
        })
    }

    return(
        <div className="login body">
            <div className="login-content">
                <h2 class="title">Battle.net</h2>
                <div classname="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="email" onChange={event => setEmail(event.target.value)} required/>
                        <input type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
                        <div className="logged-in">
                            <a href="/#">
                                <span>Forgot your password?</span>
                            </a>
                            <input type="submit" value="login-in" />
                        </div>
                    </form>
                    <div className="login-create-btn">
                        <span>Create a Battle Net account</span>
                        <a className="btn create" href="/register">Create a account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}