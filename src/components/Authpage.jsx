import React, { useState } from 'react';
import LoginForm from './Loginform';
import SignupForm from './Signupform';
import '../Auth.css';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth-container">
            <div className="auth-wrapper">

                <div className="branding-section">
                    <div className="logo">
                        <div className="logo-icon">HR</div>
                        <div className="logo-text">
                            <h1>OSA HR Solutions</h1>
                            <p>Private Limited</p>
                        </div>
                    </div>

                    <div className="welcome-text">
                        <h2>Employee Management System</h2>
                        <p>Manage your workforce efficiently with our comprehensive HR platform</p>
                    </div>

                    {/* Features List */}
                    <div className="features">
                        <div className="feature-item">
                            <span className="check">✓</span>
                            <span>Employee Database Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="check">✓</span>
                            <span>Automated Payroll Processing</span>
                        </div>
                        <div className="feature-item">
                            <span className="check">✓</span>
                            <span>Leave & Attendance Tracking</span>
                        </div>
                        <div className="feature-item">
                            <span className="check">✓</span>
                            <span>Performance Analytics</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Authentication Form */}
                <div className="form-section">
                    <div className="form-card">
                        {/* Conditionally render Login or Signup form */}
                        {isLogin ? (
                            <LoginForm onSwitch={() => setIsLogin(false)} />
                        ) : (
                            <SignupForm onSwitch={() => setIsLogin(true)} />
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthPage;