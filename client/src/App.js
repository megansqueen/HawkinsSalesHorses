import { useState, useEffect } from 'react'
import CreateUser from './CreateUser';
import HorseForm from './HorseForm';
import HorseNav from './HorseNav';
import Login from './Login';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const[currentUser, setCurrentUser] = useState(null)
  const[horses, setHorses] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((loggedInUser) => setCurrentUser(loggedInUser));
      }
    });
  }, []);

  function updateHorseInfo(data) {
    setHorses(data)
  }

  const handleNewHorse = (newItem) => {
    setHorses([...horses, newItem])
  }

    if(!currentUser) return (
      <>
      <HorseNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <main>
          <Routes>
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
            <Route path="/createprofile" element={<CreateUser setCurrentUser={setCurrentUser}/>}/>
          </Routes>
        </main>
      </>
    )
    return ( 
    <> 
      <HorseNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <main>
        <Routes>
          <Route exact path="/addhorse" element={<HorseForm />}/>
        </Routes>
        </main>
      </>  
    );
}  
export default App;
