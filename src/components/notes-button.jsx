import React from 'react';

function NotesButton({ id, onArchive, onDelete}) {
  return (
    <div className='btnContainer'>
      <button className='btnArchive' onClick={() => onArchive(id)}>Archive</button>
      <button className='btnDelete' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default NotesButton;