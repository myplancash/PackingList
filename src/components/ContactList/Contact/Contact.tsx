import React, { useState } from 'react';

import { 
  ContactContainer, 
  ContactName, 
  ContactEmail, 
  ShowHideButton  
} from './ContactStyles';


interface ContactProps {
  contact: {
    name: string;
    email: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ContactContainer>
      <ContactName>{contact.name}</ContactName>
      {expanded &&
        <ContactEmail>{contact.email}</ContactEmail>
      }
      <ShowHideButton onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? 'Hide' : 'Show'} email
      </ShowHideButton>
    </ContactContainer>
  );
}

export default Contact;
