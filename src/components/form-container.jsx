import React from 'react';
import FormNotes from './form-notes';

function FormContainer() {
  return (
    <div className='formContainer'>
      <h1>Create a New Note</h1>
      <FormNotes />
    </div>
  );
}

export default FormContainer;