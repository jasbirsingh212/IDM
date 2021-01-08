import React from "react";
import {NavLink} from 'react-router-dom'
import axios from 'axios';

class signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail : (this.props.location.state && this.props.location.state.userEmail? this.props.location.state.userEmail : ''),
            userPassword: (this.props.location.state && this.props.location.state.userPassword? this.props.location.state.userPassword : ''),
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

    validate=(res) =>{
        const {userEmail} = this.state;
        let status= res.filter(data => data.userEmail == userEmail);
        return status;
    }

    onSubmit=() =>{
        this.handlerror('');

        const {userEmail,userPassword} =this.state;
        if(userEmail != '' && userPassword != '') 
        {
        const user = {
            userEmail : userEmail
        }

            axios.get("http://localhost:4000/user/",user)
            .then(res => { 


                if(this.props.location.state !== null)
                {
                    this.props.location.state= null;
                }

                let status=this.validate(res.data);

                if(status.length > 0)
                {
                this.props.history.push({
                    pathname:'/home',
                    state: {
                        userEmail:userEmail,
                        loggedIn:true
                      }
                  })
                }
                else{
                    this.handlerror("Please Signup first");
                }
            })
            .catch(err => {
                this.handlerror("Something went wrong. Please Enter valid Email and Password");
            })
        }
        else
        {
            let err = "Something went wrong.";
            if(userEmail === '' || userPassword === '')
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
        
    


   
    
render(){
    return (

        <div className="signin-section ">
        <h1 className="signin">Sign In/Login</h1>
            <div className="container"> 
            <label htmlFor="email"><b>Email</b></label>
            <input name="userEmail" type="email" value={this.state.userEmail} onChange={this.onChange} placeholder="Enter Email" required></input>
            <label htmlFor="password"><b>Password</b></label>
            <input name="userPassword" type="password" value={this.state.userPassword} onChange={this.onChange} placeholder="Enter Password" required></input>
            <button className="signin-btn btn" onClick={this.onSubmit}>Sign in</button>
        <div className='error-occured'>
            {this.state.error}
        </div>
            <div className="no-account" >
                    <p> If you don't have an account please
                        <NavLink to="/"> SignUp</NavLink>
                    </p>
            </div>

            </div>
        </div>
    )
}
  }
export default signin;