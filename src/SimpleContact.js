import React, { Component} from 'react';

class SimpleContact extends Component{

    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '',email: '', submitted:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handle2Change = this.handle2Change.bind(this);
        this.handle3Change = this.handle3Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


  render() {
	return (

    <div>
        <div className="simple-section">

            {!this.state.submitted && (
             <form className="simple-section_form">
                <h1 className="simple-section_form-title">Contact Hulu</h1>

                <label >Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={this.handle2Change}
                    placeholder="Name"
                    value={this.state.name}
                    className="simple-section_form-input"
                    required
                />
                <br></br>
                <label >Email: </label>
                <input
                    type="text"
                    name="email"
                    onChange={this.handle3Change}
                    placeholder="Email"
                    value={this.state.email}
                    className="simple-section_form-input"
                    required
                />
                <br></br>
                <label >Message: </label>
                <textarea
                    name="message"
                    onChange={this.handleChange}
                    placeholder="What can we help you with?"
                    value={this.state.feedback}
                    className="simple-section_form-textarea"
                    required
                />
                <br></br>
                <input type="button" value="SUBMIT" className="simple-section_form-submit" onClick={this.handleSubmit} />
            </form>
            )}

            {this.state.submitted && (
                <div className="simple-section_success"> 
                    <div className="simple-section_success-message"> Thanks for your message, we will get back to you shortly!</div>
                </div>
            )}
        </div>
    </div>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handle2Change(event) {
    this.setState({name: event.target.value})
  }

  handle3Change(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
    // console.log(this.state.name);
    // this.setState({submitted:'true'});
    // console.log(this.state.submitted);

    if(this.state.name===''||this.state.email===''||this.state.feedback===''){
        alert('It Looks Like You Missed Something')
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
        console.log(variables)
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}


export default SimpleContact;


