import { useState, useEffect } from 'react'
import CreateUser from './CreateUser';
import HorseForm from './HorseForm';
import HorseNav from './HorseNav';
import Login from './Login';
import {Route, Routes} from "react-router-dom";
import './App.css';
import HorsePage from './HorsePage';

function App() {
  const[currentUser, setCurrentUser] = useState(null)
  const[horses, setHorses] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((loggedInUser) => setCurrentUser(loggedInUser));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/horses")
    .then((r) => r.json())
      .then((horseData) => updateHorseData(horseData))
  }, [])

  function updateHorseData(data) {
    setHorses(data)
    console.log(data)
  }

  const handleNewHorse = (newItem) => {
    setHorses([...horses, newItem])
  }

    if(!currentUser) return (
      <>
      <HorseNav setSearchTerm={setSearchTerm}searchTerm={searchTerm}currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <main>
          <Routes>
            <Route exact path="/*" element={<HorsePage horses={horses} setHorses={setHorses} />}/>
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
            <Route path="/createprofile" element={<CreateUser setCurrentUser={setCurrentUser}/>}/>
          </Routes>
        </main>
      </>
    )
    return ( 
    <> 
      <HorseNav setSearchTerm={setSearchTerm}searchTerm={searchTerm}currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <main>
        <Routes>
        <Route exact path="/*" element={<HorsePage currentUser={currentUser}searchTerm={searchTerm}horses={horses} setHorses={setHorses} />}/>
          <Route exact path="/addhorse" element={<HorseForm currentUser={currentUser}/>}/>
        </Routes>
      </main>
      </>  
    );
}  
export default App;
