import styled from 'styled-components';

export const ContactListSection = styled.section`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const ContactButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-image: linear-gradient(45deg, #FF6B6B, #FF8E53);
  color: #FFFFFF;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')}
`