import React, { useState } from 'react';
import InputField from './Inputfield';

function SignupForm({ onSwitch }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert('Account Created Successfully!');
            console.log('Signup Data:', formData);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const isValid =
        formData.name.trim().length >= 2 &&
        validateEmail(formData.email) &&
        formData.password.length >= 6 &&
        formData.password === formData.confirmPassword;

    return (
        <div className="auth-form">
            <div className="form-header">
                <h2>Create Account</h2>
                <p>Join OSA HR Solutions</p>
            </div>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your Full Name"
                />

                {/* Email Input */}
                <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Enter your Email Id"
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="Create a password"
                />

                <InputField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    placeholder="Confirm your password"
                />

                <div className="terms">
                    <label className="checkbox">
                        <input type="checkbox" required />
                        <span>I agree to the Terms & Conditions</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isValid || loading}
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            <div className="form-footer">
                <p>
                    Already have an account?{' '}
                    <button onClick={onSwitch} className="switch-btn">
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SignupForm;