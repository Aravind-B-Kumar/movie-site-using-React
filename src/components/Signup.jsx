import React from 'react'
import MovieNavBar from './MovieNavBar'

const Signup = () => {
    return (
        <div>
            <MovieNavBar/>
            <div class="container" >
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-white">

                        <div class="row g-3">
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="form-label">Email Address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="form-label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button class="btn btn-primary">Sign up</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup