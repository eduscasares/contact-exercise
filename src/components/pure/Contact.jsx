import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact, remove, ask }) => {

    /**
     * @returns if user is connected or not 
     */
    function isConnected() {
        if( contact.connected ) {
            return( <div className='online'> </div> );
        } else {
            return( <div className='offline'> </div> );
        }
    }

    
    return (
        <div className='contact-item'>
            <div className="contact">
                <p> { contact.name } { contact.surname } </p>
                <p> { contact.email } </p>
            </div>
                { isConnected() }

            <i 
                className='bi bi-trash-fill'
                onClick={ () => ask(contact) }></i>
        </div>
    );
};




ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};




export default ContactComponent;
