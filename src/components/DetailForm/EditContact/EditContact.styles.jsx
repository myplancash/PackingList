import styled from 'styled-components';

// Styling for EditContact
export const EditContactSection = styled.section`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  button + button {
    margin-left: 10px;
    background-color: #ccc;
    color: #333;
  }
`;