import React, { useState } from 'react'


function App() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username,
      email,
      message
    };
    alert(`Username: ${formData.username}, Email: ${formData.email}, Message: ${formData.message}`);

  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="">
            <img src="./logo.png" width="36" alt="" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container">
        <div className="row">
          <div className="col-6 align-self-center">
            <h1 className="fw-bold">Welcome, Lensa Mata</h1>
            <p className="text-secondary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit,
              ligula
              eu dapibus varius,
              turpis ipsum viverra augue, in consequat tellus nisi eu enim.</p>
          </div>

          <div className="col-6 d-flex justify-content-center">
            <img className="" src="./human.png" width="60%" alt="" />
          </div>
        </div>
      </section>

      <section className='container mb-4'>
        <div className='d-flex align-items-center'>
          <div className='me-4'>
            <img src="./about.png" width={300} alt="" />
          </div>
          <div className='ms-4'>
            <h2>About Us</h2>
            <p>Kami juga memiliki tim dukungan pelanggan yang siap membantu Anda dalam setiap langkah. Kami berkomitmen untuk memberikan pengalaman belanja yang mudah dan menyenangkan.</p>
          </div>
        </div>
      </section>


      <section className="container mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Contact Us</h2>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-6 ">

            <form onSubmit={handleSubmit}>
              <label >Username : </label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />


              <label className="mt-4" >Email : </label>
              <input
                className="form-control mt-2"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <label className="mt-4" >Message </label>
              <textarea
                className="form-control"
                cols="30"
                placeholder="Your Message"
                rows="10"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />

              <button type="submit" className="btn btn-dark w-100 btn-lg mt-4">Submit</button>
            </form>
          </div>

        </div>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 ">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src="./logo.png" width="100px" alt="" />
              <h2>Lensa Mata</h2>
            </a>
            <div className="flex">
              <img src="./facebook.png" className="mx-2" alt="" />
              <img src="./instagram.png" className="mx-2" alt="" />
              <img src="./twitter.png" className="mx-2" alt="" />
            </div>
          </div>

          <div className="col mb-3">
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Address</h5>
            <p className="text-secondary">Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat
              40132</p>
          </div>

          <div className="col mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fw-bold">Phone:
                +6289645376254</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Email:
                lensamata123@gmail.com</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">@lensamata</a></li>

            </ul>
          </div>


        </div>

      </div>
      <div className="bg-black text-center p-3">
        <p className="text-light">@Copyright. Lensamata</p>
      </div>

    </>
  )
}

export default App