import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import RegistrationForm from "./RegisterCollab";
import Profile from "./Profile";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [users, setUsers]=useState(0)
  const [curuser,setCuruser]=useState()
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
 const count =(users1)=>{
  setUsers(users1)
  console.log(users)
 }

 const curusers=(param)=>{
  setCuruser(param)
 }
 


  return (
    <div className="App">
      
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} currentuser={curusers}   />
        
      ) : currentForm === "register" ? (
        <RegistrationForm onFormSwitch={toggleForm} usercount={count} user={users}   />
      ) : (
        <Profile onFormSwitch={toggleForm} currentuser={curuser}  />
         
      )
         
      }
    </div>
  );
}

export default App;