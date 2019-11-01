import React, { Component} from 'react';

class SimpleContact extends Component{

    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '',email: '', submitted:'', error:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


  render() {
	return (

    <div>
        <div className="simplesection">

            {!this.state.submitted && (
             <form className="simplesection_form">
                <h1 className="simplesection_form-title">Contact Hulu</h1>

                <label >Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Name"
                    value={this.state.name}
                    className="simplesection_form-input"
                    required
                />
                <br></br>
                <label >Email: </label>
                <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Email"
                    value={this.state.email}
                    className="simplesection_form-input"
                    required
                />
                <br></br>
                <label >Message: </label>
                <input
                    name="message"
                    onChange={this.handleChange}
                    placeholder="What can we help you with?"
                    value={this.state.feedback}
                    className="simplesection_form-textarea"
                    required
                />
                <br></br>
                <input type="submit" value="SUBMIT" className="simplesection_form-submit" onClick={this.handleSubmit} />
            </form>
            )}

            {this.state.submitted && (
                <div className="simplesection_success"> 
                    <div className="simplesection_success-message"> Thanks for your message, we will get back to you shortly!</div>
                </div>
            )}
        </div>
    </div>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleChange2(event) {
    this.setState({name: event.target.value})
  }

  handleChange3(event) {
    this.setState({email: event.target.value})
  }

  



  handleSubmit (event) {

    if(this.state.name===''|| this.state.email ==='' || this.state.feedback===''){
        console.log('form fields not filled out');
    }
    
    if(!this.state.email.includes('@')){
        console.log('Please check this email')
    }else{
	const templateId = 'template_PikjLHGo';

     this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    
     this.setState({submitted:'true'});
    }

    
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}


export default SimpleContact;


