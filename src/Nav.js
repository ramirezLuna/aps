import React from 'react';

const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">inicio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <samp className="navbar-toggler-icon"></samp>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/productos">+ Libros</a>
                        </li> 

                    </ul>
                </div>

            </div>
        </nav>
    )
}
export default Nav;