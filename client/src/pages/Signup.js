import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import styles from "./Register.module.css";
import { validation } from "../utils/validation";
import { notify } from "../utils/notify";
import { sendPost } from '../utils/api';


const Signup = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ""
    })
    const [error, setError] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        if (localStorage.getItem("refreshToken")) {
            navigate("/")
        }
        setError(validation(data, "register"))
    }, [data, touched])

    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const foucusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!Object.keys(error).length) {

            const { username, email, password } = data
            const response = await sendPost("auth/signup", { username, email, password });

            if (response.status === 201) {
                const { accessToken, refreshToken } = response.data.token
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)
                navigate("/")
            }

            if (response.status === 400) {
                notify("Invalid data", "error")
            }

            if (response.status === 409) {
                notify(response.data.message, "error")
            }

        } else {
            notify("Invalid data", "error");

            setTouched({
                username: true,
                email: true,
                password: true,
                confirmPassword: true,
            });
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} >
                <h2 className={styles.header}>Signup</h2>
                <div className={styles.formField}>
                    <label>username</label>
                    <input
                        className={
                            error.username && touched.username ? styles.uncompleted : styles.formInput
                        }
                        type='text'
                        name='username'
                        value={data.username}
                        onChange={changeHandler}
                        onFocus={foucusHandler}
                    />
                    {error.username && touched.username && <span>{error.username}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={
                            error.email && touched.email ? styles.uncompleted : styles.formInput
                        }
                        type='text'
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={foucusHandler}
                    />
                    {error.email && touched.email && <span>{error.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={
                            error.password && touched.password ? styles.uncompleted : styles.formInput
                        }
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={foucusHandler}
                    />
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={
                            error.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput
                        }
                        type='password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={foucusHandler}
                    />
                    {error.confirmPassword && touched.confirmPassword && <span>{error.confirmPassword}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Sin Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;