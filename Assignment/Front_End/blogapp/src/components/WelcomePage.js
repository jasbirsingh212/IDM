import React from 'react';
import logo from "./../resources/logo512.png"

function WelcomePage(props)
{
    if( props && props.location.state &&props.location.state.loggedIn)
    {
        let logged=props.location.state.loggedIn;
        console.log(logged + " " );
    }

    return (
        <div id='home'>
            <h1 className="head">Welcome Page</h1>
            <div className='container'>
            <img src={logo} alt="home">
            </img>
            </div>
        </div>
    )
}

export default WelcomePage;