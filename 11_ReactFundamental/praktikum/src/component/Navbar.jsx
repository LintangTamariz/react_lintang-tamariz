export default function Navbar() {
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
                  <a className="nav-link active bg-primary rounded text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-hover" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-hover" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
  