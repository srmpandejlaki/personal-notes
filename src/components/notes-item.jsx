import React from 'react';
import NotesBody from './notes-body';
import NotesButton from './notes-button';

function NotesItem({ title, body }) {
  return (
    <div>
      <NotesBody title={title} body={body}></NotesBody>
      <NotesButton></NotesButton>
    </div>
  );
};

export default NotesItem;