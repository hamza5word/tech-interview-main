import {Link} from "react-router-dom";

function Nav() {

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'} className="btn app-nav-link">User List</Link>
                <Link to={'/UserForm/0'} className="btn app-nav-link">User Form</Link>
            </div>
        </nav>
    );
}

export default Nav;