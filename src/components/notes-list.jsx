import React from 'react';
import NotesItem from './notes-item';

function NotesList({ notes, onArchive, onDelete }) {
  return (
    <div className='notesList'>
      {notes.map((note) => (
        <NotesItem
        key={note.id} 
        id={note.id}
        onArchive={onArchive}
        onDelete={onDelete}
        {...note} />
      ))}
    </div>
  );
}

export default NotesList;