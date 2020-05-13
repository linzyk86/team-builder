import React, { useState} from 'react';
import './App.css';
import Form from './Form';


function App() {
  const [teamMembers, setTeamMembers] = useState([{
      name: "",
      email: "",
      role:""
    }]);
   
   const addTeamMember = (newTeamMember) =>{

     setTeamMembers([...teamMembers,  newTeamMember])};

  return (
    <div className="App">
      <h1>Team Members:</h1>
      <Form addTeamMember = {addTeamMember} teamMembers = {teamMembers}/>
    </div>
  );
}

export default App;
