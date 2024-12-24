import React from 'react';
import TitleLimit from './title-limit';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
   this.setState(() => {
     return {
       title: event.target.value,
     }
   });
 }
 
 onBodyChangeEventHandler(event) {
   this.setState(() => {
     return {
       body: event.target.value,
     }
   });
 }
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addNotes(this.state);
 }

 render() {
   return (
    <div className='formContainer'>
      <h1>Let's Create Your Note</h1>
      <TitleLimit></TitleLimit>
      <form className='formInput' onSubmit={this.onSubmitEventHandler}>
        <input type='text' placeholder='Title Notes' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea placeholder='Description' value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button className='btnForm' type='submit' >Save</button>
      </form>
    </div>
   );
 }
}

export default FormContainer;