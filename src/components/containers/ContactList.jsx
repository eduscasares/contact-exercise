import React, { useState } from 'react'; 
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/Contact';
import '../../styles/contact.scss'
import logo from '../../logo.svg';
import ContactForm from '../pure/forms/ContactForm';
import ModalDelete from '../pure/ModalDelete';


const ContactList = () => {


    /**
     * Creating default list of contact
     */
    const defaultContact = new Contact( 'John', 'Doe1', 'itsme@johndoe.es', false );
    const defaultContact1 = new Contact( 'John', 'Doe2', 'itsme@johndoe.es', true );
    const defaultContact2 = new Contact( 'John', 'Doe3', 'itsme@johndoe.es', true );
    const defaultContact3 = new Contact( 'John', 'Doe4', 'itsme@johndoe.es', false );


    /**
     * Setting the state of component
     */
    const [connection, setConnection] = useState([ defaultContact, defaultContact1, defaultContact2, defaultContact3]);



    let selected = null;
    /**
     * @returns a new array mapped with the deletion done
     */
    function askDeletion(contact) {
        document.querySelector('.modal-deletion').classList.add('active');
        selected = contact
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

                                    <p>{ ContactComponent.key }</p>
                                </ContactComponent>
                            )
                        
                    }) }

                    
                </div>
                <div className="contact-list-footer">
                    <p>Kindly developed by Nordl&copy;</p>
                </div>
            </div>

            <ContactForm add={ addContact }></ContactForm>

             <ModalDelete 
                contact={ selected } 
                remove={ () => deleteContact(selected) }>
            </ModalDelete>

            
        </>
    );
};



export default ContactList;
