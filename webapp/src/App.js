import './App.css';
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserForm from "./components/UserForm";
import {useEffect, useState} from "react";
import UserDetails from "./components/UserDetails";
import {UserAPI} from "./api/userApi";
import {UserModel} from "./models/UserModel";

function App() {

    const [isUpdated, setUpdated] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(new UserModel());
    const [message, setMessage] = useState(null);
    const [search, setSearch] = useState("");
    const userAPI = new UserAPI();

    useEffect(() => {
        setUser(new UserModel());
        userAPI.getUsers(setUsers);
        setUpdated(false);
    }, [isUpdated]);

    useEffect(() => {
        if(search !== "") {
            console.log(search)
            setUsers(users.filter(u => (u.name + " " + u.surname + " " + u.email).includes(search)));
        }
        else setUpdated(true);
    }, [search]);

    const setLinkActive = (target) => {
        for(let i = 0; i<document.getElementsByClassName("app-nav-link").length; i++) {
            let el = document.getElementsByClassName("app-nav-link")[i];
            if(i === target) {
                el.classList.add("app-active");
                el.classList.remove("app-hover");
            }
            else {
                el.classList.remove("app-active");
                el.classList.add("app-hover");
            }
        }
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="text-center m-3">User Management Application</h1>
                    <Nav/>
                </header>
                {message !== null ?(
                    <div className={message.type === 1 ? 'container alert alert-success app-100w text-center' : 'alert alert-danger app-100w text-center'}>{message.text}</div>
                ) : null}
                <hr/>
                <Switch>
                    <Route exact path={'/'}
                           component={() => <UserList
                               setLinkActive={setLinkActive}
                               setMessage={setMessage}
                               userAPI={userAPI}
                               user={user} setUser={setUser}
                               users={users} setUsers={setUsers}
                               isUpdated={isUpdated} setUpdated={setUpdated}
                               search={search} setSearch={setSearch}
                           />}/>
                    <Route exact path={'/UserForm/:id'}
                           component={() => <UserForm
                               setLinkActive={setLinkActive}
                               setMessage={setMessage}
                               userAPI={userAPI}
                               user={user} setUser={setUser}
                               users={users} setUsers={setUsers}
                               setUpdated={setUpdated}
                           />}/>
                    <Route exact path={'/UserDetails/:id'}
                           component={() => <UserDetails
                               setMessage={setMessage}
                               userAPI={userAPI}
                               setUpdated={setUpdated}
                           />}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
