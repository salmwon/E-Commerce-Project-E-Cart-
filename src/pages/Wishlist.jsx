import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addtoCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';
function Wishlist() {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlistSlice.wishlist)
    const handleCart = (product) => {
        dispatch(removeFromWishlist(product.id))
        dispatch(addtoCart(product))
    }
    return (
        <>
        <Header/>
            <div style={{ marginTop: '60px' }}>
                <Row className='mt-5 container'>
                    {wishlist?.length > 0 ? wishlist?.map(product => (
                        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                            <Card className='shadow rounded' style={{ width: '18rem' }}>
                                <Link to={'/view/1'}><Card.Img variant="top" style={{ height: '180px' }} src={product.thumbnail} /></Link>
                                <Card.Body>
                                    <Card.Title style={{ height: '50px' }}>{product.title.slice(0, 20)}...</Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <Button onClick={() => dispatch(removeFromWishlist(product.id))} className='btn btn-light fs-5'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></Button>
                                        <Button onClick={() => handleCart(product)} className='btn btn-light fs-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
                                    </div>
                                </Card.Body>
                            </Card>
    
                        </Col>)) :
                        <div className='text-center mb-5'>
                            <img style={{ width: '400px', marginLeft: '20%' }} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
                            <h1 style={{ marginLeft: '15%' }}>Your Wishlist is Empty!!</h1>
                        </div>
                    }
                </Row>
    
            </div>
        </>
       
    )
}

export default Wishlist