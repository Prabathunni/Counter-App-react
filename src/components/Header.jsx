import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" className='text-dark fw-bold'>
          <i class="fa-regular fa-clock me-2 fa-shake"></i>
           counter-app
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
