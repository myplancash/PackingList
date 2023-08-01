import React, { useState } from 'react';
import './AddItem.css'

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() !== '') {
      onAddItem(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter item title..."
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
