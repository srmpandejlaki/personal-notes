import React from 'react';
import NotesItem from './notes-item';

function NotesList({ notes, onArchive, onDelete }) {
  const listNotes = notes.filter((note) => !note.archived);

  return (
    <div className='notesList'>
      {listNotes.length > 0 ? (
        listNotes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            {...note}
            onArchive={onArchive}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className='notes-empty-message'>Tidak ada notes yang diarsipkan</p>
      )}
    </div>
  );
}

export default NotesList;