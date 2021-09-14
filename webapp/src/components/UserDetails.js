import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function UserDetails(props) {

    const history = useHistory();
    let { id } = useParams();
    const [user, setUser] = useState([]);

    const deleteHandler = () => {
        if(window.confirm("Are you sure ?")) {
            props.userAPI.deleteUser(id, history);
            props.setUpdated(true);
        }
    }

    useEffect(() => {
        props.userAPI.getUser(id, setUser);
    }, []);

    return (
        <div className="container">
            <h3>User Information</h3>
            <div className="d-flex justify-content-end">
                <Link to={'/UserForm/' + user.id} className="btn btn-warning text-white m-1">EDIT</Link>
                <button onClick={deleteHandler} className="btn btn-danger m-1">DELETE</button>
            </div>
            <br/>
            <table id="userInfoBlock" className="table table-borderless app-info-table">
                <tbody>
                <tr><th>User ID</th><td> : </td><td>{user.id}</td></tr>
                <tr><th>User Name</th><td> : </td><td>{user.name}</td></tr>
                <tr><th>User Surname</th><td> : </td><td>{user.surname}</td></tr>
                <tr><th>User BirthDate</th><td> : </td><td>{user.birthDate}</td></tr>
                <tr><th>User Email</th><td> : </td><td>{user.email}</td></tr>
                <tr><th>User Password</th><td> : </td><td>{user.password}</td></tr>
                <tr><th>User Phone</th><td> : </td><td>{user.phone}</td></tr>
                <tr><th>User Identity</th><td> : </td><td>{user.identity}</td></tr>
                <tr><th>User PassportNumber</th><td> : </td><td>{user.passportNumber}</td></tr>
                </tbody>
            </table>
            <br/>
            <Link to={'/'} className="btn btn-primary mb-3">Back to List</Link>
        </div>
    );

}

export default UserDetails;