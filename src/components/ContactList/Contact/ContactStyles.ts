import styled from 'styled-components';

export const ContactContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export const ContactName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ContactEmail = styled.p`
  font-style: italic;
  margin-top: 5px;
`;

export const ShowHideButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
