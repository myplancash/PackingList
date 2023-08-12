import React from 'react'
import { ContactListSection, ContactButton} from './ContactList.styles'

const ContactList = ({ contacts, selectedId, onSelect }) => {
  return (
    <ContactListSection>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactButton
              onClick={() => onSelect(contact.id)}
            >
              {contact.id === selectedId ? 
                <b>{contact.name}</b>
                : contact.name}
            </ContactButton>
          </li>
        ))}
      </ul>
    </ContactListSection>
  )
}

export default ContactList