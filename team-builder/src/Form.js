import React, {useState} from 'react';

const Form = props=>{
    const[teamMember, setTeamMember]=useState({
        id:Date.now(),
        name:"",
        email:"",
        role:""
    })

    const changeHandler = (event)=>{
        setTeamMember({
            ...teamMember, [event.target.name]:event.target.value
        })
        console.log(teamMember)
    }
    return(
    <form onSubmit = {event=>{
        event.preventDefault();
        props.addTeamMember(teamMember)
        setTeamMember({name:"", email:"", role:"", id:Date.now()})
    }}>

        <label htmlFor = "name">Name:</label>
        <input name="name" type ="text" value={teamMember.name} onChange={changeHandler}/>
        
                
        <label htmlFor = "email">Email:</label>
        <input name="email" type ="text" value={teamMember.email}onChange={changeHandler}/>

        <label htmlFor = "role">Role:</label>
        <input name="role" type ="text" value={teamMember.role} onChange={changeHandler}/>

        <button type = "submit">Submit</button>

        </form>  
    )};

export default Form;