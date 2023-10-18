import React, { useState, useEffect } from 'react';
import Loader from '../../shared/Loader';
import { useContext } from 'react'
import {CartContext} from '../../context/appContext';
import { Link } from "react-router-dom";

function Home() {
  const {addtoCart, items:{item}} = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    grtProducts().then((d) => {
      if (d) {
        setProducts(d)
      }
    })

  }, [])

  async function grtProducts() {
    let result
    try {
      const response = await fetch("https://dummyjson.com/products")
      const data = await response.json()
      result = data.products
    } catch (error) {
      console.log(error)
    }
    return result;
  }

  console.log(item)

  return (
    <div className="container text-center mt-2" >
      <div className="row">
        {
          products.length === 0 ? (<Loader />) : (
            products.map((p) => {
              return (
                <div className='col-sm-4' key={p.id}>
                  <div className="card">
                    <img src={p.thumbnail} className="card-img-top" alt="img" height="300" />
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">${p.price}</li>
                    </ul>
                    <div className="card-body">
                      <button type="button" onClick={()=> addtoCart(p.title, p.price)} disabled={item.some((v) => v.price === p.price)} className={`${item.some((v) => v.price === p.price) ? 'btn btn-secondary' : 'btn btn-primary'}`}>Buy</button>
                    </div>
                    <div><Link className="nav-link active" aria-current="page" to="/checkout">Go To Checkout</Link></div>
                  </div>
                </div>
              )
            })
          )
        }
      </div>
    </div>

  )
}

export default Home;