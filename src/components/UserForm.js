import React, { useState }  from "react";
import "./userform.css"

class User {
   constructor(full_name, account_no, debit_no, mobile_no, password){
    this.full_name = full_name;
     this.account_no = account_no;
     this.debit_no = debit_no;
     this.mobile_no = mobile_no;
     this.password = password
     this.id = new Date().getTime()
  }     
}

export default class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {fullName, accountNo, debitNo, mobileNo, passwordVal} = this.state
    const user = new User(fullName, accountNo, debitNo, mobileNo, passwordVal)
    this.props.addUser(user)
    }
    
     render() {
         const {full_name, account_no, debit_no, mobile_no, password} = this.state
        return(
            <div>
              <form id="user_form" onSubmit={this.handleSubmit}>
                 <div className="input_label">
                 <label htmlFor="full_name">Full Name</label>   
                   <input type="text" id="full_name" name="fullName" value={full_name} placeholder="Enter your Full Name" onChange={this.handleChange}/>
                  </div>
                 <div className="input_label">
                 <label htmlFor="account_no">Account number</label>
                   <input type="number" id="account_no" name="accountNo" value={account_no} placeholder="Enter your Account number" onChange={this.handleChange}/>
                  </div>
                  <div className="input_label">
                  <label htmlFor="debit_no">Debit card number</label>
                   <input type="number" id="debit_no" name="debitNo" value={debit_no} placeholder="Enter your Debit card number" onChange={this.handleChange}/>
                  </div>
                  <div className="input_label">
                  <label htmlFor="mobile_no"> Mobile number</label>
                   <input type="number" id="mobile_no" name="mobileNo" value={mobile_no} placeholder="Enter your  Mobile number" onChange={this.handleChange}/>
                  </div>
                  <div className="input_label">
                  <label htmlFor="password">Password </label>
                   <input type="text" id="password" name="passwordVal" value={password} placeholder="Enter your password" onChange={this.handleChange}/>
                  </div>
                  <button type="submit" className="btn">Submit</button>
              </form>   
            </div>  
          )
        }  
}
