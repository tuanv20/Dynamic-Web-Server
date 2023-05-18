import {
    Nav, 
    NavItem,
    NavLink
} from 'reactstrap';
export default function Navbar(){
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
  <NavItem>
    <NavLink href="https://github.com/tuanv20" style={{color: 'white', textDecoration: 'none'}}>
      Other Stuff
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="https://github.com/tuanv20" style={{color: 'white', textDecoration: 'none'}}>
      More Stuff
    </NavLink>
  </NavItem>
</Nav>
    )
}