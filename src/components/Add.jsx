import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var [input, setinput] = useState({ name: "", age: "", dept: "", sal: "" })
  var navigate = useNavigate()
  var loc=useLocation()
  const inputHandler = (e) => {
    setinput({...input,[e.target.name]:e.target.value})
  }
  const gets = () => {
    if (loc.state !== null) {
      axios.put("http://localhost:3004/update/"+loc.state.val._id, input)
        .then((res) => {
          alert(res.data)
          navigate("/table")
        })
    }
    else {
      
    axios.post("http://localhost:3004/add", input)
      .then((res) => {
        alert(res.data)
        navigate("/table")
      })
  }
  }

  if (loc.state !== null) {

    useEffect(() => {
      setinput({
        ...input,
        name: loc.state.val.name,
        age: loc.state.val.age,
        dept: loc.state.val.dept,
        sal: loc.state.val.sal,

      })
    }, [])
  }
  return (
      <div>
          <h1>REGISTER</h1>
      <TextField label="NAME" variant='outlined'
        name='name'
        value={input.name}
        onChange={inputHandler} />
      <br /><br />
      <TextField label="AGE" variant='outlined' name='age'
        value={input.age}
        onChange={inputHandler} />
      <br /><br />
      <TextField label="DEPARTMNET" variant='outlined'
        name='dept'
        value={input.dept}
        onChange={inputHandler} /><br /><br />
      <TextField label="SALARY" variant='outlined'
        name='sal'
        value={input.sal}
        onChange={inputHandler} /><br /><br />
          <Button variant='outlined' onClick={gets}>submit</Button>
    </div>
  )
}

export default Add