import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./App.css";
import Login from './Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';

//import index from "./index"

function App() 
{
  
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState({});
  // const [loginStatus, setLoginStatus] = useState({});
  /*const [setLoginStatus, setusername] = useState({}); */


  
  /* const database = [ */
    /* {
      Axios.post("http://127.0.0.1:5000"),
      username:
    } */


    // const database = () => { axios.post("http://127.0.0.1:5000/login", 
    // { username: username, 
    //   password: password, }).then((response) =>
    //  {
    //   //  if (!response.data.message) 
    //   // {
    //   //   setLoginStatus( response.data.message);
    //   //  }
    //   //   else {
    //   //     setLoginStatus (response.data[0].message);
    //   //    }
         
    //   //   });
    //     console.log("response")
    //   });




    


    /* {
      username: "Ravi",
      password: "123"
    },
    {
      username: "rasool",
      password: "111"
    }
  ]; */

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit = (event) => {
    
  //   event.preventDefault();
  //   axios.post('http://locahost:5000/login',{username, password}).then(response=>{
  //     console.log("ssuccess")
  //   })

  //   // var { uname, pass } = document.forms[0];

    
  //   // const userData = database.find((setUsername) => setUsername.username === uname.value);
  //   // console.log(userData);
  //   console.log(setUsername);
  //   console.log(setPassword);


    
  //   // if (userData) {
  //   //   if (userData.password !== pass.value) {
        
  //   //     setErrorMessages({ name: "pass", message: errors.pass });
  //   //   } else {
  //   //     setIsSubmitted(true);
  //   //   }
  //   // } else {
      
  //   //   setErrorMessages({ name: "uname", message: errors.uname });
  //   // }
  // };

  
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

 
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" name="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         <input type="password" name="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    // <div className="app">
    //   <div className="login-form">
    //     <div className="title">Sign In</div>
        
        
    //     {isSubmitted ? <div>User is successfully logged in</div> : renderForm}


    //   </div>
    // </div>




    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}
//}
export default App;

