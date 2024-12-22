import React from 'react';
import NotesItem from './notes-item';

function NotesList({ notes, onArchive, onDelete }) {
  console.log(notes.id, notes);
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