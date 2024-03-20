import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../REDUX/Slices/productSlice'

function Header({ insideHome }) {
  const dispatch = useDispatch()
  const wishlistCount = useSelector(state => state.wishlistReducer).length
  const cartCount = useSelector(state => state.cartReducer).length
  return (
    <>
      <Navbar expand="lg" style={{ zIndex: '10' }} className="bg-info position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><i className="fa-solid fa-truck-fast me-2"></i>E-Kart</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {insideHome && <Nav.Link className='me-lg-5'>
                <input onChange={(e) => dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '400px' }} type="text" className='form-control' placeholder='Search Products Here!!!' />
              </Nav.Link>}
              <Nav.Link className='btn rounded'>
                <Link to={'/wishlist'} className='d-flex align-items-center text-decoration-none text-light fw-bold'>
                  <i className="fa-solid fa-heart text-primary me-2"></i>Wishlist<Badge bg="secondary" className='ms-2 rounded'>{wishlistCount}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='btn rounded ms-5'>
                <Link to={'/cart'} className='d-flex align-items-center text-decoration-none text-light fw-bold'>
                  <i className="fa-solid fa-cart-shopping text-danger me-2"></i>Cart<Badge bg="secondary" className='ms-2 rounded'>{cartCount}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header