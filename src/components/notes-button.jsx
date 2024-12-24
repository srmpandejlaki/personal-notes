import React from 'react';

function NotesButton({ id, onArchive, onUnarchive, onDelete}) {
  return (
    <div className='btnContainer'>
      <button className='btnArchive' onClick={() => onArchive(id)}>Archive</button>
      <button className='btnUnarchive' onClick={() => onUnarchive(id)}>Unarchive</button>
      <button className='btnDelete' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default NotesButton;