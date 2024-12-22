import React from 'react';

function NotesBody({ title, body }) {
  return (
    <div>
      <h2 className='titleNotes'>{title}</h2>
      <p className='descriptionNotes'>{body}</p>
    </div>
  );
}

export default NotesBody;