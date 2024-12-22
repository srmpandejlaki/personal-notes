import React from 'react';

function FormInput({ title, body }) {
  return (
    <div className='formInput'>
      <input type='text' placeholder='Title Notes' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder='Description' value={body} onChange={(e) => setBody(e.target.value)}/>
    </div>
  );
}

export default FormInput;