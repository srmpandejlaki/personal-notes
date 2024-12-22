import React from 'react';
import NotesList from './notes-list';
import { getInitialData } from '../utils/index';

function NotesContainer() {
  const notes = getInitialData();

  return (
    <div className='notesContainer'>
      <h1>Personal Notes</h1>
      <NotesList notes={notes} />
    </div>
  );
}

export default NotesContainer;