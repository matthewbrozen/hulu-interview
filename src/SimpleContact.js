import React, { Component} from 'react';

class SimpleContact extends Component{
    render(){
        return(
            <div>
                <h1> Simple Contact</h1>
                <form>

                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="Your name.." />
                    <br></br>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Your name.." />
                    <br></br>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your name.." />

                </form>


            </div>
        )
    }
}


export default SimpleContact;