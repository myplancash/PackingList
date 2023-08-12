import { useState } from 'react';
import ContactList from './ContactList/ContactList';
import EditContact from './EditContact/EditContact';
import { DetailFormContainer, FormContent } from './DetailForm.styles';

const DetailForm = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find(c => c.id === selectedId);

  const handleSave = updatedData => {
    const updatedContacts = contacts.map(c =>
      c.id === updatedData.id ? updatedData : c
    );
    setContacts(updatedContacts);
  };

  return (
    <DetailFormContainer>
      <FormContent>
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          onSelect={id => setSelectedId(id)}
        />
        <EditContact key={selectedId} initialData={selectedContact} onSave={handleSave} />
      </FormContent>
      <hr />
    </DetailFormContainer>
  );
};

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default DetailForm;
