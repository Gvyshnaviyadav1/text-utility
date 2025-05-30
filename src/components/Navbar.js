import react from 'react';
import { Link } from 'react-router-dom';

// In JSX


export default function Navbar(props){

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <a  className="nav-link" href="#">Home</a>

        </li>
        {/*<li className="nav-item">
          
          <Link className="nav-link" to="/about">About</Link>
        </li>*/}
        
        
      </ul>
     {/*<form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>*/}
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            
        </div>
    </div>
  </div>
</nav>
    )
};