import {useEffect} from "react";
import {Link} from "react-router-dom";

function UserList(props) {

    useEffect(() => {
        props.setMessage(null);
        props.setLinkActive(0);
    }, []);

    const search = () => {
        props.setSearch(document.getElementById("searchValue").value);
    }

    return(
        <div className="container-fluid">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <input id="searchValue" className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={search} className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
            <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th/>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SURNAME</th>
                        <th>BIRTH-DATE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(u => (
                        <tr key={u.id}>
                            <td><Link to={'/UserDetails/' + u.id} className="btn btn-primary app-100w">VIEW</Link></td>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.surname}</td>
                            <td>{u.birthDate}</td>
                            <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;