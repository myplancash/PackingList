import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter/Letter.js';
import './mailClient.css'

export default function MailClient() {
  // const [letters, setLetters] = useState(initialLetters);
  // const [highlightedId, setHighlightedId ] = useState(null);
  const [selectedIds, setSelectedIds] = useState([])
  const selectedCount = selectedIds.length;

 /* function handleHover(letterId) {
    setHighlightedId(letterId);
  } */

  function handleToggle(toggleId) {
    if(selectedIds.includes(toggleId)) {
      setSelectedIds(selectedIds.filter(id => id !== toggleId))
    } else {
      setSelectedIds([
        ...selectedIds,
        toggleId
      ])
    }
    /* setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    })); */
  }

  return (
    <section className='container'>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            /* isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar} */
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </section>
  );
}
