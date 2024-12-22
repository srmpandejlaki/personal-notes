import React from 'react';

function FormButton({ id, submit }) {
  return (
    <button className='btnForm' type='submit' onClick={() => submit(id)}>Save</button>
  );
}

export default FormButton;