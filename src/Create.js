// Create.js
import React, { useState, useContext } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [fullname, setFullName] = useState(localStorage.getItem('fullname') || "");
    const [phone, setPhone] = useState(localStorage.getItem('phone') || "");
    const [email, setEmail] = useState(localStorage.getItem('email') || "");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [company, setCompany] = useState(localStorage.getItem('company') || "");
    const [agency, setAgency] = useState(localStorage.getItem('agency') || "Yes");

    const handleOptionChange = (e) => {
        setAgency(e.target.value);
        localStorage.setItem('agency', e.target.value);
    };

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
        localStorage.removeItem('fullname');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
        localStorage.removeItem('company');
        localStorage.removeItem('agency');
        setFullName("");
        setPhone("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setCompany("");
        setAgency("Yes");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('company', company);
        setUserData({ name: fullname, email: email });
        clearForm();
        navigate("/page");
    };

    return (
        <div className='sign'>
            <form onSubmit={handleSubmit} className='form' id="form">
                <fieldset>
                    <h2>Create your PopX account</h2>
                    <div className="form__field">
                        <label htmlFor="fullname" className="form__label">Full Name <sup>*</sup> </label>
                        <input
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Enter Full Name'
                            required
                            id="fullname"
                            className="form__input"
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="phone" className="form__label">Phone Number <sup>*</sup> </label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Enter Phone Number'
                            required
                            id="phone"
                            className="form__input"
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="email" className="form__label">Email Address <sup>*</sup></label>
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
                        <label htmlFor='password' className="form__label">Password <sup>*</sup></label>
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
                    <div className="form__field">
                        <label htmlFor="company" className="form__label">Company Name <sup>*</sup> </label>
                        <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder='Enter Company Name'
                            required
                            id="company"
                            className="form__input"
                        />
                    </div>
                    <div>
                        <p>Are you an Agency? <sup>*</sup></p>
                        <div>
                            <label className='gap'>
                                <input
                                    type="radio"
                                    value="Yes"
                                    checked={agency === 'Yes'}
                                    onChange={handleOptionChange}
                                    className="radio-large"
                                />
                                <span className="radio-label">Yes</span>
                            </label>
                            <label className='gap'>
                                <input
                                    type="radio"
                                    value="No"
                                    checked={agency === 'No'}
                                    onChange={handleOptionChange}
                                    className="radio-large"
                                />
                                <span className="radio-label">No</span>
                            </label>
                        </div>
                    </div>
                    <Button type='submit' id='bw' disabled={!getFormValid()}>
                        Login
                    </Button>
                </fieldset>
            </form>
        </div>
    );
};

export default Create;
