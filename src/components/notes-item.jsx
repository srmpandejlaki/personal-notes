import React from 'react';
import NotesBody from './notes-body';
import NotesButton from './notes-button';

function NotesItem({ title, body, createdAt, id, onArchive, onDelete }) {
  return (
    <div className='notesItem'>
      <NotesBody title={title} body={body} createdAt={createdAt}></NotesBody>
      <NotesButton id={id} onArchive={onArchive} onDelete={onDelete} ></NotesButton>
    </div>
  );
};

export default NotesItem;