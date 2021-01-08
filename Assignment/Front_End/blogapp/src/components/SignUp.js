import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Register  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail : '',
            userPassword:'',
            userName:'',
            error:''
          }
    }

    onChange=(event) =>{
         let key =event.target.name;
         let value=event.target.value;

         this.setState({...this.state,
             [key]:value
         })
    }

    onSubmit=() =>{
        this.handlerror('');
        const {userEmail,userPassword,userName} =this.state;
        if(userEmail && userPassword && userName)
        {
        const user = {
            userEmail : userEmail,
            userPassword:userPassword,
            userName:userName,
        }
            axios.post("http://localhost:4000/user/add",user)
            .then(res => { 
                this.props.history.push({
                    pathname:'/SignIn',
                    state: {
                        userEmail:userEmail,
                        userPassword:userPassword
                      }  
                  })
            })
            .catch(err => {
                this.handlerror("Something went wrong. Please try different Email");
            })
        }
        else
        {
            let err = "Something went wrong.";
            if(userEmail === '' || userPassword === '' || userName === '')
            {
                err="Please Enter all the fields "
            }
            this.handlerror(err);
        }
    }
    
    handlerror=(err) =>{
    this.setState({
        error:err
    })
  }

    render() { 
        return (
            <div className="signup-section ">
            <h1 className="signup">Sign up/Register</h1>
            
                <div className="container"> 
                <label htmlFor="email"><b>Email</b></label>
                <input name="userEmail" type="email"   onChange={this.onChange} placeholder="  Enter Email" required></input>
                <label htmlFor="password"><b>Password</b></label>
                <input name="userPassword" type="password" onChange={this.onChange} placeholder="  Enter Password" required></input>
                <label htmlFor="name"><b>Name</b></label>
                <input name="userName" type="name"  onChange={this.onChange} placeholder="Enter Name" required></input>
                <button className="signup-btn btn" onClick={this.onSubmit}>Sign up</button>

        <div className="error-occured">
            {this.state.error}
        </div>
                <div className="account" >
                        <p> If you have an account please
                            <NavLink to="/SignIn"> Login </NavLink>
                        </p>
                </div>
    
                </div>
            </div>
          );
    }
}

export default Register;