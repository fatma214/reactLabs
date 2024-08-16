import React, { useState } from 'react';

export default function Register(props) {
    console.log(props);
    
    const [userData, setUserData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        repassword: ""
    });

    const [errors, setErrors] = useState({
        nameError: "",
        userNameError: "",
        emailError: "",
        passwordError: "",
        repassError: ""
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password) => {
        const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(password);
    };

    const changeData = (e) => {
        const name = e.target.name;
        let value =e.target.value;

        if (name === "name") {
            setUserData({ ...userData, name: value });
            setErrors({ ...errors, nameError: value.length === 0 ? "Name is required" : "" });
        } else if (name === "userName") {
            setUserData({ ...userData, userName: value });
            setErrors({
                ...errors,
                userNameError: value.length === 0 ? "Username is required" : /\s/.test(value) ? "Username must not contain spaces" : ""
            });
        } else if (name === "email") {
            setUserData({ ...userData, email: value });
            setErrors({
                ...errors,
                emailError: value.length === 0 ? "Email is required" : !validateEmail(value) ? "Invalid email format" : ""
            });
        } else if (name === "password") {
            setUserData({ ...userData, password: value });
            setErrors({
                ...errors,
                passwordError: value.length === 0 ? "Password is required" : !validatePassword(value) ? "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, one digit, and one special character" : ""
            });
        } else if (name === "repassword") {
            setUserData({ ...userData, repassword: value });
            setErrors({
                ...errors,
                repassError: value.length === 0 ? "Password is required" : value !== userData.password ? "Passwords do not match" : ""
            });
        }
    };

    return (
        <div className="container mt-5">
            <h3>Register Now</h3>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" value={userData.name} className='form-control mb-2' id='name' name='name' onChange={changeData} />
                <p className='text-danger'>{errors.nameError}</p>

                <label htmlFor="userName">Username</label>
                <input type="text" value={userData.userName} className='form-control mb-2' id='userName' name='userName' onChange={changeData} />
                <p className='text-danger'>{errors.userNameError}</p>

                <label htmlFor="email">Email</label>
                <input type="email" value={userData.email} className='form-control mb-2' id='email' name='email' onChange={changeData} />
                <p className='text-danger'>{errors.emailError}</p>

                <label htmlFor="password">Password</label>
                <input type="password" value={userData.password} className='form-control mb-2' id='password' name='password' onChange={changeData} />
                <p className='text-danger'>{errors.passwordError}</p>

                <label htmlFor="repassword">Confirm Password</label>
                <input type="password" value={userData.repassword} className='form-control mb-2' id='repassword' name='repassword' onChange={changeData} />
                <p className='text-danger'>{errors.repassError}</p>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
