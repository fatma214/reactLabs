import React, { useState } from 'react';

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    });

    const changeData = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });

        switch (name) {
            case 'email':
                setErrors({
                    ...errors,
                    emailError:
                        value.length === 0
                            ? 'Email is required'
                            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                ? 'Invalid email address'
                                : '',
                });
                break;
            case 'password':
                setErrors({
                    ...errors,
                    passwordError:
                        value.length === 0
                            ? 'Password is required'
                            : value.length < 8
                                ? 'Password must be at least 8 characters'
                                : '',
                });
                break;
            default:
                break;
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container mt-5">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={loginData.email}
                        className="form-control mb-2"
                        name="email"
                        id="email"
                        onChange={changeData}
                    />
                    <p className="text-danger">{errors.emailError}</p>

                    <label htmlFor="password">Password</label>
                    <input
                       type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        className="form-control mb-2"
                        name="password"
                        id="password"
                        onChange={changeData}
                    />
                    <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                        {showPassword ? "hide" : "show"}
                    </button>

                    <p className="text-danger">{errors.passwordError}</p>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
