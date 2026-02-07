import React, { useState } from 'react';
import InputField from './Inputfield';

function LoginForm({ onSwitch }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            alert('Login Successful!');
            console.log('Login Data:', { email, password });
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
            if (errors.email) {
                setErrors({ ...errors, email: '' });
            }
        } else if (name === 'password') {
            setPassword(value);
            if (errors.password) {
                setErrors({ ...errors, password: '' });
            }
        }
    };

    const isValid = email && password && validateEmail(email) && password.length >= 6;

    return (
        <div className="auth-form">
            <div className="form-header">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Enter your Email Id"
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="Enter your password"
                />

                <div className="form-options">
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <a href="#" className="forgot-link">Forgot Password?</a>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isValid || loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>

            <div className="form-footer">
                <p>
                    Don't have an account?{' '}
                    <button onClick={onSwitch} className="switch-btn">
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;