import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../shared/Loader';

function About() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    grtProducts().then((d) => {
      if (d) {
        setProducts(d)
      }
    })

  },[])

  async function grtProducts() {
    let result
    try {
      // const response = await axios.get("https://dummyjson.com/products");
      // result = response?.data?.products;
      const response =await fetch("https://dummyjson.com/products")
      const data = await response.json()
      result = data.products
    } catch (error) {
      console.log(error)
    }
    return result;
  }

  // if (products) {

  // }

  return (
    <div className="container text-center mt-2" >
      <div className="row">
        {
          products.length === 0 ? (<Loader/>): (
            products.map((p) => {
              return (
                <div className='col-sm-4' key={p.id}>
                  <div className="card">
                    <img src={p.thumbnail} className="card-img-top" alt="img" height="300" />
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{p.price}</li>
                      <li className="list-group-item">{p.discountPercentage}</li>
                      <li className="list-group-item">{p.rating}</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">{p.stock}</a>
                      <a href="#" className="card-link">{p.brand}</a>
                      <a href="#" className="card-link">{p.category}</a>
                    </div>
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

export default About;