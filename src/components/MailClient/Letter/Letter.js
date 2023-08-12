import './Letter.css'

export default function Letter({
  letter,
  isSelected,
  onToggle,
}) {
  return (
    <li
      className={
       `${isSelected ? 'highlighted' : ''} letter` 
      }
      /* onFocus={() => {
        onHover(letter.id);        
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }} */
    >
      <label>
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
        />
        {' '}
        {letter.subject}
      </label>
    </li>
  )
}
