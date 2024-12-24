import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleLimitHandler = this.onTitleLimitHandler.bind(this);
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

  onTitleLimitHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;

    if (this.props.addNotes) {
      this.props.addNotes({ title, body, titleLimit });
    }

    this.setState({ title: '', body: '' });
  }

 render() {
  const { titleLimit, title, body } = this.state;
  return (
    <div className='formContainer'>
      <h1>Let's Create Your Note</h1>
      <p className="character-limit">Title must be less than {titleLimit - title.length} characters</p>
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