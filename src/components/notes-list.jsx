import React from 'react';
import NotesItem from './notes-item';

function NotesList({ notes }) {
  return (
    <div className='notesList'>
      {notes.map((note) => (
        <NotesItem key={note.id} {...note} />
      ))}
    </div>
  );
}

export default NotesList;