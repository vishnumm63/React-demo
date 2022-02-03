import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
        
            <div className="row">
                <div className="col-md-6">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" alt="" width="100%" />
                    
                </div>
                <div className="col-md-6">
                        <div>
                            <p>Sign in with
                                <span>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-linkedin"></i>
                                <i class="fab fa-twitter"></i>
                                </span>
                            </p>
                        </div>

                        <div>
                            <p>or</p>
                        </div>
                        <form action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label"><Link to="#" style={{textDecoration:'none'}}>Remember me</Link></label>

                                <Link to="#" style={{textDecoration:'none'}}> Forgot password</Link>
                            </div>

                            <button className="btn btn-primary">Login</button>
                            <h6>Don't have password? <Link to="/register">Register</Link></h6>
                        </form>
                  
                </div>
            </div>
        </div>
    )
}

export default Login
