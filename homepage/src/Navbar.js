import React, { useState } from 'react';
import {
    Nav, 
    NavItem,
    NavLink,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
import { Link } from "react-router-dom";
export default function Navbar(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    return(
      <Nav className='bg-dark' justified pills>
      <NavItem>
        <NavLink href="https://github.com/tuanv20" target = "_blank" style={{color: 'white', textDecoration: 'none'}}>
          Github
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/content/resume" style={{color: 'white', textDecoration: 'none'}}>
          Resume
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
          Projects
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href={"http://localhost:3000"}>TodoList</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Project 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Project 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="https://github.com/tuanv20" style={{color: 'white', textDecoration: 'none'}}>
          Resources Used
        </NavLink>
      </NavItem>
    </Nav>
    )
}