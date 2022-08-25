import React, { useRef } from 'react';
import '../../../styles/contact-form.scss';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    /**
     * @return This function will create a new instace of Contact class and will be added
     * to the contact list via father component
     */
    function createContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
        )

        add(newContact);

        // Cleaning form after submit
        document.getElementById('contact-form').classList.remove('active');
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('email').value = '';
    }


    return (
        <form 
            id='contact-form'
            onSubmit={ createContact } >
            <i className="bi bi-x-lg" onClick={ () => 
                    document.getElementById('contact-form').classList.remove('active') }></i>
            <input id="name" ref={ nameRef } type="text" placeholder="Name" required/>
            <input id="surname" ref={ surnameRef } type="text" placeholder="Surname" required/>
            <input id="email" ref={ emailRef } type="email" placeholder="Email" required/>
            <button type='submit'>Create contact</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default ContactForm;
