import Navbar from '@/components/navbar';
import React, { useState } from 'react';


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Send a POST request to the login endpoint with username and password
        fetch('/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Set the token in local storage or as a cookie
                // You can use a library like 'js-cookie' for managing cookies
                localStorage.setItem('token', data.token);
                onLogin();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
