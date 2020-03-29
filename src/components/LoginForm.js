import React from 'react';
import { Link } from "react-router-dom";


function LoginForm() {
    return <form className="menu">
                <div className="formBox">
                    <img src="https://www.csp.edu/wp-content/themes/csponline/assets/images/logo.svg" alt="Concordia Logo" />

                <div className="form">
                    <label htmlfor="email"></label>
                        <input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com" />
                </div>

                <div className="form">
                    <label htmlfor="password"></label>
                        <input type="password" className="form-control" id="examplePass" placeholder="Password" />
                </div>

                    <div className="form-group">
                    <div className="form-check">
                    </div>
                    </div>

                    <Link to="/Home">
                        <button type="submit" className="btn-primary">Sign in</button>
                    </Link >
                </div>
            </form>
}

export default LoginForm;