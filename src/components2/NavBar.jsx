import React from 'react'
import { Link, useHistory ,useLocation} from "react-router-dom";

const NavBar = (props) => {
    
    let history=useHistory();
    const handleLogout=() => {
        localStorage.removeItem('token') 
        props.showAlert("Log Out Successfully", "success");
        history.push('/login')
    }
    let location = useLocation();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/about">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active": ""}`}  aria-current="page" to="/">Home</Link>
                            </li>
                            {/* {localStorage.getItem('token') && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link> </li>} */}
                        
                            {localStorage.getItem('token') && <ul className="navbar-nav me-auto mb-2 mb-lg-0"> <li className="nav-item" ><Link className={`nav-link ${location.pathname==="/business"? "active": ""}`} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/entertainment"? "active": ""}`} to="/entertainment">Entertainment</Link></li>
                            {/* <li className="nav-item"><Link className={`nav-link ${location.pathname==="/general"? "active": ""}`} to="/general">General</Link></li> */}
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/health"? "active": ""}`} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/science"? "active": ""}`} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"? "active": ""}`} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"? "active": ""}`} to="/technology">Technology</Link></li> </ul>}
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                         <Link className="btn btn-outline-light mx-1" to="/login" role="button">Login</Link> 
                    <Link className="btn btn-outline-light mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className='btn btn-primary' >Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar