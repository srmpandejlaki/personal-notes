import React from 'react';
import { showFormattedDate } from '../utils/index';

function NotesBody({ title, body, createdAt }) {
  return (
    <div>
      <h2 className='titleNotes'>{title}</h2>
      <p className='bodyNotes'>{body}</p>
      <p className='dateNotes'>{showFormattedDate(createdAt)}</p>
    </div>
  );
}

export default NotesBody;
