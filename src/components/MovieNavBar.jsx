import React from 'react'

const MovieNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Movie</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/search">Search</a>
                            <a class="nav-link " href="/facts">Facts</a>
                        </div>
                    </div>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/signup">Sign Up</a>
                            <a class="nav-link " href="/signin">/ Sign In</a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default MovieNavBar