import React from "react";

function Header() {
    return (
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="link-secondary" href="#">
                            Subscribe
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="blog-header-logo text-dark" href="#">
                            Large
                        </a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a
                            className="link-secondary"
                            href="#"
                            aria-label="Search"
                        ></a>
                        <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 link-secondary" href="#">
                        Worldxxx
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        U.S.x
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Technologyx
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Design
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Culture
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Business
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Politics
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Opinion
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Science
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Health
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Style
                    </a>
                    <a className="p-2 link-secondary" href="#">
                        Travel
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Header;
