import styled from 'styled-components';

export const DetailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  hr {
    width: 100%;
    margin: 0;
    border: none;
    border-top: 1px solid #ccc;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
