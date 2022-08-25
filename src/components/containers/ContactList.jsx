import React, { useState } from 'react'; 
// import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/Contact';
import '../../styles/contact.scss'
import logo from '../../logo.svg';
import ContactForm from '../pure/forms/ContactForm';
import ModalDelete from '../pure/ModalDelete';


const ContactList = () => {


    /**
     * Creating default list of contact
     */
    // const defaultContact = new Contact( 'John', 'Doe', 'itsme@johndoe.es', false );
    // const defaultContact1 = new Contact( 'John', 'Doe', 'itsme@johndoe.es', true );
    // const defaultContact2 = new Contact( 'John', 'Doe', 'itsme@johndoe.es', true );
    // const defaultContact3 = new Contact( 'John', 'Doe', 'itsme@johndoe.es', false );


    /**
     * Setting the state of component
     */
    const [connection, setConnection] = useState([]);



    /**
     * @returns a new array mapped with the deletion done
     */
    function askDeletion() {
        document.querySelector('.modal-deletion').classList.add('active')
    }

    function deleteContact(contact) {
        const index = connection.indexOf(contact);
        const aux = [...connection];
        aux.splice(index, 1);
        setConnection(aux);
    }



    /**
     * @return a new array mapped with the addition of a new contact
     */
    function addContact(contact) {
        const aux = [...connection];
        aux.push(contact);
        setConnection(aux);
    }



    return (
        <>
            <div className='contact-list-container'>
                <div className="contact-list-header">
                    <div className="heading">
                        <img src={ logo } className="App-logo" alt="logo" />
                        <h2>Friend List</h2>
                    </div>
                    <i className="bi bi-plus" onClick={ () => 
                    document.getElementById('contact-form').classList.add('active') }></i>
                </div>
                <div className="contact-list-body">

                    { connection.length === 0 
                        ? <div className="no-contact">
                            <img src={ logo } className="App-logo" alt="logo" />
                            <p>Start saving your friend in a list by clicking the <span>+</span> button</p>
                        </div>

                        : connection.map((connect, index) => {

                            return(
                                <ContactComponent 
                                    contact={ connect }
                                    key={ index } 
                                    ask={ askDeletion } >
                                </ContactComponent>
                            )
                        
                    }) }

                    
                </div>
                <div className="contact-list-footer">
                    <p>Kindly developed by Nordl&copy;</p>
                </div>
            </div>

            <ContactForm add={ addContact }></ContactForm>
            <ModalDelete remove={ deleteContact }></ModalDelete>
        </>
    );
};



export default ContactList;
