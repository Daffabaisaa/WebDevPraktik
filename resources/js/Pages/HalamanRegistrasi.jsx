import React, { useState } from 'react';
import axios from 'axios';

const HalamanRegistrasi = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', form);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.errors);
        }
    };

    return (
        <div className="registration-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={form.password_confirmation}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default HalamanRegistrasi;
