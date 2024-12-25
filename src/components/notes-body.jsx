import React from 'react';
import { showFormattedDate } from '../utils/index';

function NotesBody({ title, body }) {
  return (
    <div>
      <h2 className='titleNotes'>{title}</h2>
      <p className='bodyNotes'>{body}</p>
      <p className='dateNotes'>{showFormattedDate(new Date())}</p>
    </div>
  );
}

export default NotesBody;