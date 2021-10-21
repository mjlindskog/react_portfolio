import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../styles/contact.css';

export default function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailForm, setEmailForm] = useState({ email:'', subject:'', content:'' });

    const { email, subject, content } = emailForm

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!event.target.value.length) {
                  setErrorMessage(`${event.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setEmailForm({...emailForm, [event.target.name]: event.target.value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
};