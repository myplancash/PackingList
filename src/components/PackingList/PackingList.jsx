import React from 'react';
import './PackingList.css'

export default function PackingList({ items, onChangeItem, onDeleteItem }) {
  function handleItemChange(item, packed) {
    onChangeItem({ ...item, packed });
  }

  function handleItemDelete(itemId) {
    onDeleteItem(itemId);
  }

  return (
    <ul>
      {items.map(item => (
        <li 
          key={item.id}
           style={{ textDecoration: item.packed ? 'line-through' : 'none' }}
        >
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => handleItemChange(item, e.target.checked)}
            />
            {item.title}
          </label>
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
