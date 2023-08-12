// ContactList.styles.ts
import styled from 'styled-components';

export const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

export const ReverseCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;

  input {
    margin-right: 5px;
  }
`;

export const ContactUL = styled.ul`
  list-style: none;
  padding: 0;
`;
