import { useContext } from 'react'
import { CartContext } from '../../context/appContext';

export const ReviewAndSubmit = () => {
  const { items: {item, userDetial} } = useContext(CartContext);
  debugger
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Customer Detail</li>
            <li class="list-group-item">{userDetial.firstName}</li>
            <li class="list-group-item">{userDetial.lastName}</li>
            <li class="list-group-item">{userDetial.email}</li>
            <li class="list-group-item">{userDetial.phone}</li>
          </ul>
        </div>
        <div className="col">
          <div className="col">
            {item.map((i, index) => {
              return (
                <div className='row' key={index}>
                  <div className="col">Name: {i.title}</div>
                  <div className="col">Price: {i.price}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
