import React, { useState, useEffect } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import styles from "./Register.module.css";
import { validation } from "../utils/validation";
import { notify } from "../utils/notify";
import { sendPost } from '../utils/api';



const Login = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        if(localStorage.getItem("refreshToken")){
            navigate("/")
        }
        setError(validation(data, 'login'));
    }, [data, touched]);

    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };
    const submitHandler = async (event) => {
        event.preventDefault();

        if (!Object.keys(error).length) {

            const { username, password } = data
            const response = await sendPost("auth/login", { username, password });
            

            if (response.status === 201) {
                const { accessToken,refreshToken } = response.data.token
                localStorage.setItem("accessToken",accessToken)
                localStorage.setItem("refreshToken",refreshToken)
                navigate("/")
            }

            if (response.status === 400) {
                notify("Invalid data", "error")
            }

            if (response.status === 401) {
                notify(response.data.message, "error")
            }

        } else {
            notify("Invalid data", "error");

            setTouched({
                username: true,
                password: true,
            });
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>

                <div className={styles.formField}>
                    <label>username</label>
                    <input
                        className={
                            error.username && touched.username ? styles.uncompleted : styles.formInput
                        }
                        type="username"
                        name="username"
                        value={data.username}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {error.username && touched.username && <span>{error.username}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={
                            error.password && touched.password ? styles.uncompleted : styles.formInput
                        }
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/signup">Signup</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;