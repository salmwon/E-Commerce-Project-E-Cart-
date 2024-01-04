import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '300px' }} className='container w-100 mt-5'>
      <div className="footer-content d-flex justify-content-between">
        <div className="title w-25">
          <h3> <i class="fa-solid fa-truck-fast me-2"></i>
           E CART</h3>
          <span>
            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

          </span><br />
          <span>Code licensed MIT, docs CC BY 3.0</span><br />
          <span>Currently v5.3.2</span>
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link to={'/'} style={{  textDecoration:'none' }}>Home</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none' }}>Wishlist</Link>
          <Link to={'/Cart'} style={{textDecoration:'none' }}>Cart</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h3>Guides</h3>
          <a  className='text-decoration-none' href="">React</a>
          <a className='text-decoration-none' href="">React Bootstrap</a>
          <a  className='text-decoration-none' href="">React Routing</a>
        </div>
        <div className="contact d-flex flex-column">
          <h3>Contact Us</h3>
          <div className='d-flex'> 
          <input type="text" placeholder='Enter your mail' className='form-control' />
          <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>          
          <div className="icons mt-3 d-flex justify-content-between">
            <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i>

          </div>


        </div>



      </div>
      <p className='text-center mt4'>Copyright &copy;2023 E CART . Build with React.</p>
    </div>
  )
}

export default Footer