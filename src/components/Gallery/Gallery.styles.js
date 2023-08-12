import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const GalleryContainer = styled.section`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1 rem;
  height: 100vh;
  margin: 0;
  background-color: #f5f5f5;

  p {
    margin-top: 10px;
    font-size: 18px;
    color: #333;
  }

  h3 {
    font-size: 16px;
    color: #888;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1rem;
`
/* Styling for the button */
export const GalleryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  background-color: ${({disabled}) => (disabled && '#53585d')};
  :hover {
    background-color: #0056b3;
  }
`

/* Styling for the image */
export const GalleryImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`