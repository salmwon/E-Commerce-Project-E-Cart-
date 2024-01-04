import React, { useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart } from '../Redux/Slices/cartSlice'
function Home() {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.productSlice)
  const { wishlist } = useSelector(state => state.wishlistSlice)
  const cart = useSelector(state => state.cartReducer)
  useEffect(() => {
    dispatch(fetchProducts())

  }, [])
  const handleWishlist = (product) => {
    const existingProduct = wishlist.find(item => item.id == product.id)
    if (existingProduct) {
      alert("product already exist!!")
    } else {
      dispatch(addToWishlist(product))
    }
  }
 
  return (
    <div className='container' style={{ marginTop: '100px' }}>
      {
        loading ? <div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="danger" />Loading...</div> :

          <Row className='mt-5'>
            {products.length > 0 && products.map((product, index) => (
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow rounded' style={{ width: '18rem' }}>
                  <Link to={`/view/${product.id}`}><Card.Img style={{ height: '180px' }} variant="top" src={product.thumbnail} /></Link>
                  <Card.Body>
                    <Card.Title style={{ height: '50px' }}>{product.title.slice(0, 20)}...</Card.Title>
                    <div className='d-flex justify-content-between'>
                      <Button onClick={() => handleWishlist(product)} className='btn btn-light fs-5'><i class="fa-solid fa-heart text-danger"></i></Button>
                      <Button onClick={()=>dispatch(addtoCart(product))} className='btn btn-light fs-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
                    </div>
                  </Card.Body>
                </Card>

              </Col>
            ))}
          </Row>
      }
    </div>
  )
}

export default Home