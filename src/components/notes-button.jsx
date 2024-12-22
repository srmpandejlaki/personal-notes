import React from 'react';

function NotesButton({ id, onArchive, onDelete}) {
  return (
    <div className='btnContainer'>
      <button className='btnArchive'>Archive</button>
      <button className='btnDelete'>Delete</button>
    </div>
  );
}

export default NotesButton;