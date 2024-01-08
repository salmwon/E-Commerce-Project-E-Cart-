import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Badge, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../Redux/Slices/productSlice';



function Header() {
    const dispatch=useDispatch()
    const [wishlistCount, setWishlistCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const wishlist = useSelector(state => state.wishlistSlice.wishlist)
    const cart = useSelector(state => state.cartReducer)
    useEffect(() => {
        setWishlistCount(wishlist?.length)
        setCartCount(cart?.length)
    }, [wishlist, cart])
    return (
        <div>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                    <Container>
                        <Navbar.Brand href="#"><Link to={'/'} style={{ textDecoration: 'none' }}><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
                        <Navbar.Brand>
                            <Form className="d-flex border rounded">
                                <Form.Control
                                onChange={e=>dispatch(productSearch(e.target.value.toLowerCase()))}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Navbar.Brand>
                        <Navbar.Brand href="#"><Link to={'/wishlist'} style={{ textDecoration: 'none' }}><Button className='rounded' variant="outline-primary"><i class="fa-solid fa-heart me-2"></i>Wishlist<Badge className='ms-1 rounded'>{wishlistCount}</Badge></Button>{' '}</Link>
                            <Link to={'/cart'}><Button className='rounded' variant="outline-primary"><i class="fa-solid fa-cart-shopping me-1"></i>Cart <Badge className='ms-1 rounded'>{cartCount}</Badge></Button>{' '}</Link>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Header