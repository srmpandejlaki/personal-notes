import React from 'react';
import NotesList from './notes-list';
import { getInitialData } from '../utils/index';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }  

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {...note, isArchived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id!== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className='notesContainer'>
        <h1>Personal Notes</h1>
        <NotesList notes={this.state.notes} onArchive={this.onArchiveHandler}  onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesContainer;