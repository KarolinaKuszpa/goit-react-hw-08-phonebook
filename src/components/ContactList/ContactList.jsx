import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    const fetchContactsFromBackend = async () => {
      dispatch(fetchContacts()); // Pobieranie kontaktów z backendu przy montowaniu komponentu
    };

    fetchContactsFromBackend(); // Pobieranie kontaktów z backendu przy montowaniu komponentu
  }, [dispatch]);

  //filtrowanie kontaktów na podstawie wartości filtra
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <span className={styles.contactName}>{contact.name}</span>
            <span className={styles.contactNumber}>{contact.number}</span>
            <button
              className={styles.deleteBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
