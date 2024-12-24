import React from 'react';
import NotesBody from './notes-body';
import NotesButton from './notes-button';

function NotesItem({ title, body, id, onArchive, onUnarchive, onDelete }) {
  return (
    <div className='notesItem'>
      <NotesBody title={title} body={body}></NotesBody>
      <NotesButton id={id} onArchive={onArchive} onUnarchive={onUnarchive} onDelete={onDelete} ></NotesButton>
    </div>
  );
};

export default NotesItem;