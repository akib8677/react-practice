import React, { Fragment, useState, useEffect } from 'react';

function Home() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    // State: '',
    zip: '',
    checked: true
  })



  function handleChange(e) {
    e.preventDefault();
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    setUser()
  }

  return (
    <Fragment>
      <div className='container mt-3'>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="validationServer01" className="form-label">First name</label>
            <input type="text" className={`form-control ${user.firstName.length > 3 ? 'is-valid' : 'is-invalid'}`}
              name='firstName' id="validationServer01" onChange={handleChange} value={user.firstName} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              First name is required.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServer02" className="form-label">Last name</label>
            <input type="text" className={`form-control ${user.lastName.length > 3 ? 'is-valid' : 'is-invalid'}`}
              name='lastName' id="validationServer02" onChange={handleChange} value={user.lastName} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Last name is required.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServerUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">@</span>
              <input type="text" className={`form-control ${user.username.length > 3 ? 'is-valid' : 'is-invalid'}`}
                name='username' onChange={handleChange} value={user.username} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer03" className="form-label">City</label>
            <input type="text" className={`form-control ${user.city.length > 3 ? 'is-valid' : 'is-invalid'}`}
              name='city' onChange={handleChange} value={user.city} id="validationServer03" aria-describedby="validationServer03Feedback" required />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          {/* <div className="col-md-3">
            <label htmlFor="validationServer04" className="form-label">State</label>
            <select className="form-select is-invalid" name='state' id="validationServer04" defaultValue={'DEFAULT'} onChange={handleChange} value={user.State} aria-describedby="validationServer04Feedback" required >
              <option selected disabled value="DEFAULT">Choose...</option>
              <option value="1">Muz</option>
              <option value="2">Spj</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div> */}
          <div className="col-md-3">
            <label htmlFor="validationServer05" className="form-label">Zip</label>
            <input type="text" className={`form-control ${user.zip.length > 3 ? 'is-valid' : 'is-invalid'}`}
              name='zip' onChange={handleChange} value={user.zip} id="validationServer05" aria-describedby="validationServer05Feedback" required />
            <div id="validationServer05Feedback" className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-check">
              <input className="form-check-input is-invalid" type="checkbox" name='checked' onChange={handleChange} value={user.checked} id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Home;