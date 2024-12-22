import React from 'react';
import NotesList from './notes-list';
import { getInitialData } from '../utils/index';
import FormContainer from './form-container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }  

  onAddNotesHandler({ title, body }) {
   this.setState((prevState) => {
     return {
       notes: [
         ...prevState.notes,
         {
           id: +new Date(),
           title,
           body,
           createdAt: +new Date(),
         }
       ]
     }
   });
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
      <div className='main'>
        <FormContainer addNotes={this.onAddNotesHandler} />
        <div className='notesContainer'>
          <h1>Personal Notes</h1>
          <NotesList notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default Main;