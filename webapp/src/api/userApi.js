import axios from "axios";
import {MessageModel} from "../models/MessageModel";
// TODO: your api calls should be here

export function UserAPI() {
    this.baseURI = "http://localhost:9090/user"
}

UserAPI.prototype.getUsers = function (setUsers) {
    axios.get(this.baseURI + '/requestAllUsers').then((response) => {
        setUsers(response.data);
    });
}

UserAPI.prototype.getUser = function (id, setUser) {
    axios.get(this.baseURI + '/requestUserById?id=' + id).then((response) => {
        setUser(response.data);
    }).catch();
}

UserAPI.prototype.saveUser = function (userData, setUserId, setMessage, history) {
    axios.post(this.baseURI + '/requestUserSave', JSON.stringify(userData), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        setMessage(new MessageModel(1, "User " + userData.name + " saved successfully"));
        history.push('/UserDetails/' + response.data);
    });
}

UserAPI.prototype.deleteUser = function (id, history) {
    axios.delete(this.baseURI + '/requestUserDelete?id=' + id).then((response) => {
        history.push("/");
    });
}


