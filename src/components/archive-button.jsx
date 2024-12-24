import React from 'react';

function ArchiveButton({ id, onUnarchive, onDelete}) {
  return (
    <div className='btnContainer'>
      <button className='btnUnarchive' onClick={() => onUnarchive(id)}>Unarchive</button>
      <button className='btnDelete' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ArchiveButton;