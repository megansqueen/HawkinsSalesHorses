import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();

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

    if(!currentUser) return (
      <>
      <HorseNav currentUser={currentUser}navigate={navigate}setSearchTerm={setSearchTerm}searchTerm={searchTerm}setCurrentUser={setCurrentUser}/>
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
      <HorseNav currentUser={currentUser}navigate={navigate}setSearchTerm={setSearchTerm}searchTerm={searchTerm}setCurrentUser={setCurrentUser}/>
      <main>
        <Routes>
        <Route exact path="/*" element={<HorsePage updateHorseData={updateHorseData}useNavigate={useNavigate}navigate={navigate}currentUser={currentUser}searchTerm={searchTerm}horses={horses} setHorses={setHorses} />}/>
          <Route exact path="/addhorse" element={<HorseForm navigate={navigate}currentUser={currentUser}/>}/>
        </Routes>
      </main>
      </>  
    );
}  
export default App;
