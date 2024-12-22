import React from 'react';
import FormInput from './form-input';
import FormButton from './form-button';

function FormNotes({ title, body }) {
  return (
    <div className='formNotes'>
      <FormInput title={title} body={body} ></FormInput>
      <FormButton></FormButton>
    </div>
  );
}

export default FormNotes;