import React from 'react';
import NotesBody from './notes-body';
import ArchiveButton from './archive-button';

function ArchiveItem({ title, body, id, onUnarchive, onDelete }) {
  return (
    <div className='notesItem'>
      <NotesBody title={title} body={body}></NotesBody>
      <ArchiveButton id={id} onUnarchive={onUnarchive} onDelete={onDelete} ></ArchiveButton>
    </div>
  );
};

export default ArchiveItem;