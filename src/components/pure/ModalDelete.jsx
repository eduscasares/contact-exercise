import React from 'react';
import { Contact } from '../../models/Contact.class';
import PropTypes from 'prop-types';
import '../../styles/modal-deletion.scss'


const ModalDelete = ( { contact, remove } ) => {

    return (
        <div className='modal-deletion'>

            <p>¿Estás seguro que quieres borrar el contacto?</p>

            <div className="group-buttons">
                <i className="bi bi-check2" onClick={ () => {
                    remove(contact);
                    document.querySelector('.modal-deletion').classList.remove('active')
                    document.querySelector('.App').classList.remove('modalOn'); } }>

                </i>
                <i className="bi bi-x-lg" onClick={ () => {
                    document.querySelector('.modal-deletion').classList.remove('active');
                    document.querySelector('.App').classList.remove('modalOn');
                } }></i>
            </div>
        </div>
    );

};


ModalDelete.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}; 


export default ModalDelete;
