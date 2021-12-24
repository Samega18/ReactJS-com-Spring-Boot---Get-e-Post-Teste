import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";
const USERS_REST_API_URL_POST = "http://localhost:8080/api/set-users";

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    setUsers(user){
        axios.post(USERS_REST_API_URL_POST, user)
    }
}

export default new UserService();