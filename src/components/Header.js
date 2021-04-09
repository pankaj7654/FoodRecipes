import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-2 sticky-top">

        <a className="navbar-brand text-white" href="/"><h4><span className="font-weight-bold">Food Recipes</span></h4></a>
        <button className="navbar-toggler border baseBlock" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/">Home</a>
                </li>
            </ul>


            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/cart"><i className="fas fa-cart-plus h6"></i>
                        <span className="badge badge-info"></span></a>
                </li>

                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/login">Login<i className="fas fa-sign-in-alt"></i></a>
                </li>

                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/signup">signup</a>
                </li>

                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/order">Order</a>
                </li>

                <li className="nav-item active">
                    <a className="nav-link text-white baseBlock" href="/logout">Logout<i className="fas fa-sign-out-alt"></i></a>
                </li>

            </ul>

        </div>
    </nav>
  );
};

export default Header;
