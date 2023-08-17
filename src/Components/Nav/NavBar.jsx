import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
function NavBar() {
    
    
    const state = useSelector((state) => state.Cart)
    
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='Navbar-Brand'>LC Wakiki</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto d-flex gap-4">
                        <NavLink to="/" className='Nav-Link'>Home</NavLink>
                        <NavLink to="/products" className='Nav-Link'>Products</NavLink>
                        <NavLink to="/about" className='Nav-Link'>About</NavLink>
                        <NavLink to="/contact" className='Nav-Link'>Contact</NavLink>
                    </Nav>
                    <div className="buttons d-flex gap-3 ">
                        <button className='btn btn-outline-success'><i className="fa-solid fa-right-to-bracket"></i> Login</button>
                        <button className='btn btn-outline-success'><i className="fa-solid fa-user"></i>  Register</button>
                        <button className='btn btn-outline-success'><NavLink to="/cartshop" ><i className="fa-solid fa-cart-shopping"></i> Cart - {state.length}</NavLink> </button> 

                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;