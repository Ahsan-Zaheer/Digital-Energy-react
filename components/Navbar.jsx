import classes from '../assets/nav.module.css';
import widgets from '../assets/widgets.svg'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid res-menu ">
                    <a className="navbar-brand pt-3 ps-3" href="#">
                        <img src={props.logo} alt="" className="img-fluid logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="toggler">
                            <img src={widgets} alt="" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 d-flex justify-content-center align-items-center mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${classes.items}`} aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${classes.items}`} href="#">
                                    What We Do
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${classes.items}`} href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${classes.items}`} href="#">
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}