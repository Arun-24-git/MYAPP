import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <h3>employee</h3>&nbsp;&nbsp;
                  <Link to="/add">
                      <Button variant='contained'>ADD</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to="/table">
                      <Button variant='contained'>view</Button>
                  </Link>
              </Toolbar>
          </AppBar>

    </div>
  )
}

export default Nav