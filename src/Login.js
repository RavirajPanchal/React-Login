import React from 'react'
import axios from 'axios';
import "./App.css";
import { useState } from 'react';
import './Login.css';
//import Popup from 'reactjs-popup';

//import { ToastContainer, toast } from 'react-toastify';



export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    //const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [loginStatus, setLoginStatus] = useState({});


    // const typeData = JSON.stringify({ type: 'ViewAll' });
    // const config = { headers: {'Access-Control-Allow-Origin': '*',
    //  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   'Content-Type': 'text/plain'
    //  }
    //  };

    //  let navigate = useNavigate();




    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    const handleSubmit=(event)=>{ 
    event.preventDefault();
    console.log({username, password})
    axios.post('http://127.0.0.1:5000/login',{
    username:username, 
    password:password})
    .then(result=>{
      if(event.result===true)
      {
        window.location.href="/Home";
      }
      else
      {
        window.location.href="/login";
      }
        console.log(result)})


        // .catch(error=>{
        //     console.log(error)})
        }



    // const experimentData = async () => {
    //    await axios.post("http://127.0.0.1:5000/login", typeData, JSON.stringify(config))
    //     .then((resp) => {
    //        sessionStorage.setItem("experimentData", JSON.stringify(resp.data));
    //        })
    //         .catch((error) => {
    //            console.log(error);
    //            });
    //             navigate("/Home");
    //            }

    //             const onSubmit = (event) => {
    //                event.preventDefault();
    //                 sessionStorage.clear();
    //                  if (username.trim().length === 0 || password.trim().length === 0) {
    //                    return
    //                    }
    //                    authenticate(username, password).then(data => {
    //                      experimentData()
    //                      })
    //                      .catch(err => {
    //                        // console.log(err)  
                           
    //                       toast.error('Incorrect username or password!', {
    //                          position: "top-center",
    //                           autoClose: 5000,
    //                           hideProgressBar: false,
    //                           closeOnClick: true,
    //                           pauseOnHover: true,
    //                           draggable: true,
    //                           progress: undefined,
    //                           theme: "light",
                                 
    //                         });
    //                    })
    //                 }


  return (
    <div className='app'>
    <div className="login-form">
    <form onSubmit={handleSubmit}>

      <div className="input-container">
      <input type="text" placeholder="username" value={username} onChange={event => {setUsername(event.target.value);}}/>
      {renderErrorMessage("username")}

      </div>

      <div className="input-container">
      <input type="text" placeholder="Password" value={password} onChange={event => {setPassword(event.target.value);}}/>
      {renderErrorMessage("password")}
      </div>
      
     <div className="button-container">
     <button type="submit" onClick={handleSubmit}>Log In</button>
      </div> 
      

      

      

      
  {/* <Popup trigger={<button type="submit" onClick={handleSubmit}>Log In</button>} position="right center">
    <div>login successfully !!</div>
  </Popup> */}



    </form>
    </div>
    </div>






        // <div className="form">
        //   {/* <form onSubmit={handleSubmit}> */}
        //     <div className="input-container">
        //       <label>Username </label>
        //       <input type="text" name="uname" required />
        //       {renderErrorMessage("uname")}
        //     </div>
        //     <div className="input-container">
        //       <label>Password </label>
        //       <input type="password" name="pass" required />
        //       {renderErrorMessage("pass")}
        //     </div>
        //     <div className="button-container">
        //       <input type="submit" onClick={handleApi}/>
        //     </div>
        //   {/* </form> */}
        // </div>
  )





}