import React from 'react';
import NotesItem from './notes-item';

function ArchiveList({ notes, onUnarchive, onDelete}) {
  return (
    <div className='archiveList'>
      {notes.map((note) => (
        note.isArchived &&
        <NotesItem key={note.id}
        id={note.id}
        {...note}
        onUnarchive={onUnarchive}
        onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ArchiveList;