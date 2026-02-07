import React, { useState } from 'react';

function InputField({ label, type, name, value, onChange, error, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className="input-group">
            <label>{label}</label>
            <div className="input-wrapper">
                <input
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={error ? 'error' : ''}
                />

                {type === 'password' && (
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={togglePassword}
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                )}
            </div>

            {error && <span className="error-message">{error}</span>}
        </div>
    );
}

export default InputField;