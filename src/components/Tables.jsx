import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Tables = () => {
    var [emp, setemp] = useState([])
    var navigate=useNavigate()
    axios.get("http://localhost:3004/view")
        .then((res) => {
            setemp(res.data);
        }
    )
    const Del = (id) => {
        axios.delete(`http://localhost:3004/delete/${id}`)
            .then((res) => {
                alert(res.data)
            }
        )
    }
    const updatefn = (val) => {
        navigate("/add", { state:{val} })
        
    }
  return (
      <div>
          <TableContainer><br /><br />
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell>AGE</TableCell>
                          <TableCell>DEPARTMENT</TableCell>
                         <TableCell>SALARY</TableCell>
                      </TableRow>
                  </TableHead>
                  {
                      emp.map((val) => {
                          return (
                              <TableBody>
                                  <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.age}</TableCell>
                                  <TableCell>{val.dept}</TableCell>
                                  <TableCell>{val.sal}</TableCell>
                                  <TableCell><Button variant='contained' onClick={() => (Del(val._id))}>DELETE</Button></TableCell>
                                 <TableCell><Button variant='contained' onClick={() => (updatefn(val))}>UPDATE</Button></TableCell>
                                  </TableRow>
                              </TableBody>

                          )
                      }
                      
                      )
                  }

              </Table>
              
          </TableContainer>
    </div>
  )
}

export default Tables