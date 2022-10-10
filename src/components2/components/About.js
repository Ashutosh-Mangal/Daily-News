import React from 'react'
import { Link} from "react-router-dom";
const About = () => {
    return (
        <div>
            <div className=" container jumbotron">
                <h1 className="display-4 mt-5" style={{color:"purple"}}>Hello, NewsMonkey!</h1>
                <h4 className="lead">This is a simple website, where you can read daily news at any time.</h4>
                <hr className="my-4"/>
                    <p>Ask not what your country can do for you; ask what you can do for your country.</p>
                    <p className="lead">
                        <Link className="btn btn-dark mt-3 btn-lg" to={localStorage.getItem('token')? "/": "/login"} role="button">Start using NewsMonkey</Link>
                    </p>
            </div>
        </div>
    )
}

export default About
