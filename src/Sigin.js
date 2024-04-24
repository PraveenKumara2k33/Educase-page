import React, { useState, useContext } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from './UserContext'; 

const Sigin = () => {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });

    const passwordErrorMessage = () => {
        return (
            <p className='Message'>Password Should Have at least 8 Characters</p>
        );
    };

    const getFormValid = () => {
        return (validateEmail(email) && password.value.length >= 8);
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const clearForm = () => {
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ name: email, email: email }); // Change fullname to email
        clearForm();
        navigate("/page"); // Navigate to Page.js after form submission
    };

    return (
        <div className='sign'>
            <form onSubmit={handleSubmit} className='form' id="form">
                <fieldset>
                    <h2>Signin to your PopX account</h2>
                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className="form__field">
                        <label htmlFor="email" className="form__label">Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter email address'
                            required
                            id="email"
                            className="form__input"
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor='password' className="form__label">Password</label>
                        <input
                            type="password"
                            value={password.value}
                            onChange={(e) => setPassword({ ...password, value: e.target.value })}
                            onBlur={() => setPassword({ ...password, isTouched: true })}
                            placeholder='Enter Password'
                            required
                            id="password"
                            className="form__input"
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            passwordErrorMessage()
                        ) : null}
                    </div>
                    <Button type='submit' id='bw' disabled={!getFormValid()}>
                        Login
                    </Button>
                </fieldset>
            </form>
        </div>
    );
};

export default Sigin;
