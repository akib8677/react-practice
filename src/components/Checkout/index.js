
import { useContext, useState } from 'react'
import { CartContext } from '../../context/appContext';
import { useNavigate  } from "react-router-dom";
import {ReviewAndSubmit} from '../ReviewSubmitOrder'

function Checkout() {
  const navigate  = useNavigate();
  const { items, setItems } = useContext(CartContext)
  const [message, setMessage] = useState('')
  const [checkOutFormData, setCheckOutFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleChange = (event) => {
    setCheckOutFormData({
      ...checkOutFormData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit() {
    if (validateForm()) {
      setItems({...items, userDetial: checkOutFormData });
      navigate("/review");
    } else {
      console.log('unsuccess')
    }
  }

  function validateForm() {
    if (!checkOutFormData.firstName || !checkOutFormData.lastName || !checkOutFormData.email || !checkOutFormData.phone) {
      setMessage('All inputs are required')
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {items.item.map((i, index) => {
            return (
              <div className='row' key={index}>
                <div className="col">Name: {i.title}</div>
                <div className="col">Price: {i.price}</div>
              </div>
            )
          })}
        </div>
        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" name='firstName' value={checkOutFormData.firstName} className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" name='lastName' value={checkOutFormData.lastName} className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name='email' value={checkOutFormData.email} className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" name='phone' value={checkOutFormData.phone} className="form-control" onChange={handleChange} />
              {message && <span className='text-danger'>{message}</span>}
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout