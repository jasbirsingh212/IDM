import React, { Component } from 'react';
import './style/app.scss';
import Header from './components/Header';
import {Switch,Route,Redirect} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';
let loggedIn = false;


class App extends Component {
  
  
  render() { 
    return (
      <div className="App">
        <Header ></Header>
        <Switch>
          <Route path="/home"  component={WelcomePage} />
          <Route path='/SignIn' component={Login}></Route>
          <Route path='/' exact component={SignUp}></Route>
        </Switch>
      </div>
    );
   
  }
}
 
export default App;

// funct App {
  
//   setlogged =(res) =>{
//     loggedIn=res
//   }
//   return (
//     <div className="App">
//       <Header status={loggedIn}></Header>
//       <Switch>
//         <Route path='/home' component={<WelcomePage function={setlogged} ></WelcomePage>}></Route>
//         <Route path='/SignIn' component={Login}></Route>
//         <Route path='/' exact component={SignUp}></Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;
