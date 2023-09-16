import React, {useEffect} from 'react';
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


const Navbar=() => {
    useEffect(() => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome to Create Product',
            showConfirmButton: false,
            timer: 1500
          })
          
    }, []);
    console.log('Welcome', Navbar)
  return (
    <section classNameName="container">
    <nav className="fixed-top 
                    navbar navbar-expand-lg 
                    bg-light 
                    pt-9 
                    ps-4
                    pe-4">
      <div className="container-fluid">
        <a className="navbar-brand  " href="#">Simple Header</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active bg-primary rounded text-white" href="home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-hover" href="features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-hover" href="pricing">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  )
}

export default Navbar
