import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/cartSlice'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'


function Cart() {
    const cart = useSelector(state => state.cartReducer)
    const navigate = useNavigate()
    const [cartAmount, setCartAmount] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        if (cart?.length) {
            setCartAmount(cart?.map(product => product.totalPrice).reduce((p1, p2) => p1 + p2))
        } else {
            setCartAmount(0)
        }
    }, [cart])
    const handleCheckout = () => {
        alert('Your Order has Successfully Placed Thank you for Shopping with Us 🤗')
        dispatch(emptyCart())
        navigate('/')
    }

    const handleDecrementCart = (product) => {
        if (product.quantity == 1) {
            dispatch(removeCart(product.id))
        } else {
            dispatch(decQuantity(product))
        }
    }
    return (
        <>
            <Header />
            <div className='container mt-5'>
                {
                    cart?.length > 0 ? <div className="row mt-5">
                        <div className="col-lg-8">
                            <h3 className='mt-5'>Cart Summery</h3>
                            <table className='table shadow mt-3'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.map((product, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>{product.title}</th>
                                            <th><img style={{ height: '100px', width: '100px' }} src={product.thumbnail} alt="" /></th>
                                            <th><div className='d-flex'>
                                                <button onClick={() => dispatch(handleDecrementCart(product))} className='btn'>-</button>
                                                <input type="text" style={{ width: '70px' }} className='form-control' value={product.quantity} />
                                                <button onClick={() => dispatch(incQuantity(product))} className='btn'>+</button>
                                            </div>
                                            </th>
                                            <th>$ {product.totalPrice}</th>
                                            <th><button onClick={() => dispatch(removeCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='float-end'>
                                <Button className='rounded' onClick={() => dispatch(emptyCart())} variant="outline-danger">EMPTY CART</Button>{' '}
                                <Link to={'/'}><Button className='rounded' variant="outline-info">shop more</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className='d-flex flex-column border rounded p-4'>
                                <h5>Total Product: <span className='fw-bolder'>{cart?.length}</span></h5>
                                <h3>Total Amount: <span className='fw-bolder'>${cartAmount}</span></h3>
                                <hr />
                                <div className='d-grid'>
                                    <button onClick={handleCheckout} className='btn btn-success rounded'>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className='text-center mb-5'>
                            <img style={{ width: '400px' }} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
                            <h1>Your Cart is Empty!!</h1>
                            <Link to={'/'} className='btn btn-success mt-2 rounded' >Click here to Shop More</Link>
                        </div>
                }
            </div>
        </>

    )
}

export default Cart