import { useState, useEffect } from 'react'
import CreateUser from './CreateUser';
import HorseForm from './HorseForm';
import HorseNav from './HorseNav';
import Login from './Login';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const[currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
    })
  }, [])

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user))
  //     }
  //   });
  // }, []);

  // if (user) {
    if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
    return ( 
    <div> 
      <HorseNav />
        <Routes>
          <Route exact path="/addhorse" element={<HorseForm />}/>
          <Route path="/createprofile" element={<CreateUser setCurrentUser={setCurrentUser}/>}/>
        </Routes>
      </div>  
    )
  // } else {
  //   return <Login onLogin={setUser}/>
  // }

}  
export default App;
