import React, { useState } from 'react';
import { 
  ContactListContainer, 
  ReverseCheckbox, 
  ContactUL
} from './ContactListStyles';
import Contact from './Contact/Contact';

interface ContactItem {
  id: number;
  name: string;
  email: string;
}

const ContactList: React.FC = () => {
  const [reverse, setReverse] = useState(false);
  const displayedContacts: ContactItem[] = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <ContactListContainer>
      <ReverseCheckbox>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => setReverse(e.target.checked)}
        />
        {' '}
        Show in reverse order
      </ReverseCheckbox>
      <ContactUL>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ContactUL>
    </ContactListContainer>
  );
};

const contacts: ContactItem[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

export default ContactList;
