import React, { useState } from 'react';
import images from './imageData';
import {
  GalleryImage, 
  GalleryButton, 
  GalleryContainer,
  Buttons
} from './Gallery.styles.js';


const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const hasNext: boolean = index < (images?.length || 0) - 1;
  const hasPrevious: boolean = index > 0;
  const image = images[index];

  const handleClick = (): void => hasNext ? setIndex(index + 1) : undefined;

  const handlePrevious = (): void => hasPrevious ? setIndex(index - 1) : undefined

  return (
    <GalleryContainer>
      <Buttons>
        <GalleryButton 
          onClick={handlePrevious} 
          disabled={!hasPrevious}
        >
          Back
        </GalleryButton>
        <GalleryButton 
          onClick={handleClick} 
          disabled={!hasNext}
        >
            Next
        </GalleryButton>
      </Buttons>

      <h3>Image {index + 1} of: {images?.length}</h3>
       <GalleryImage
          key={image.src}  
          src={image.src}
          alt={image.place}
      />
      <p>{image.place}</p>
    </GalleryContainer>
  )
}

export default Gallery