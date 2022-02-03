import React from 'react'

import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <section>
            <div id="bg-img-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <h1 className="text-center">CREATE AN ACCOUNT</h1>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Your password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm password" />
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" />
                                            <label class="form-check-label"><Link to="#" style={{textDecoration:'none'}}>I agree all statements</Link></label>

                                            <Link to="#" style={{textDecoration:'none'}}> Terms and services</Link>
                                        </div>

                                        <button className="btn btn-primary btn-block">Register</button>
                                        <div className="form-group d-flex">
                                            <p>Have already an account?</p>
                                            <Link to="/login">Login Here</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
