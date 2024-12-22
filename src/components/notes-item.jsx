import React from 'react';
import NotesBody from './notes-body';
import NotesButton from './notes-button';

function NotesItem({ title, body }) {
  return (
    <div className='notesItem'>
      <NotesBody title={title} body={body}></NotesBody>
      <NotesButton></NotesButton>
    </div>
  );
};

export default NotesItem;