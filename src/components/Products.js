import React, { useEffect } from 'react'
import {Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../rtk/slices/cart-slice';
import { fetchProducts } from '../rtk/slices/products-slice';

const Products = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);


  return (
    <Container className='py-5'>
      <div className='row py-5'>
        {products.map((product) => (
          <div className='col-lg-4 col-md-6 mb-3 ' key={product.id} >
            <div className="card" style={{ width: '100%', minHeight: "550px" }}>
              <img src={product.image} class="img-fluid card-img-top" style={{ height: 200 }} alt="..." onClick={() => navigate("/cart")} />
              <div className="card-body d-flex flex-column justify-content-around">
                <h5 className="card-title">{product.title.slice(0, 50)}</h5>
                <p className="card-text">{product.description.slice(0, 100)}....</p>
                <h4 className="card-text">{product.price} $</h4>
                {/* <div className="text-center">
                  <span className='h5'>count: </span>
                  <input type="number" className="my-2 w-50 mx-auto" />
                </div> */}
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </Container>

  )
}

export default Products;