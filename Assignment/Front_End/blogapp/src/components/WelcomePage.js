import React from 'react';
import logo from "./../resources/logo512.png"

function WelcomePage(props)
{
   if(props.location && props.location.state && props.location.state.userEmail)
   {
    return (
        <div id='home'>
            <h1 className="head">Welcome {props.location.state.userEmail}</h1>
            <div className='container'>
            <img src={logo} alt="home">
            </img>
            </div>
        </div>
    )
   }
   else{
    return (
        <div id='home'>
            <h1 className="head">Please SignIn to Get Started</h1>
            <div className='container'>
            <img src={logo} alt="home">
            </img>
            </div>
        </div>
    )
    

   }
}

export default WelcomePage;