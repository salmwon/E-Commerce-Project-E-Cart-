import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
function View() {
  const { id } = useParams()
  const { loading, products, error } = useSelector((state) => state.productSlice)

  const {wishlist}=useSelector(state=>state.wishlistSlice)
  const [product, setProduct] = useState({})
  const dispatch=useDispatch()
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product => product.id == id))
  }, [])

  const handleWishlist=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exist!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  //console.log(product);


  return (
    <div className='mt-5 container'>
      {loading ? <div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="info" />Loading...</div> :
        <div className="row mt-5 align-items-center">
        <div className="col-md-4">
          <img className='rounded shadow' style={{ height: '250px', width: '100%' }} src={product?.thumbnail} alt="" />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <p>PID: {product?.id}</p>
          <h1>{product?.title}</h1>
          <h5 className='fw-bolder'>$ {product?.price}</h5>
          <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Description : </span>{product?.description}</p>
          <div className='d-flex justify-content-between'>
            <Button className='rounded' onClick={()=>handleWishlist(product)} variant="outline-danger"><i class="fa-solid fa-heart text-danger me-1"></i>Wishlist</Button>{' '}
            <Button className='rounded' variant="outline-success"><i class="fa-solid fa-cart-shopping text-success me-1"></i>Cart</Button>{' '}
          </div>
        </div>
      </div>}
    </div>
  )
}

export default View