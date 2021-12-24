import React, { useState } from "react";
import UserService from "../services/UserService";
import './UserComponentStyle.css';

class UserComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }

    }

    updateList() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
        
    }

    render(){
        return (
            <div>
                <h1 className="text-center"> Users List </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email Id</td>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
                <CreateUser/>
                <div className="RefreshList" onClick={() => this.updateList()}>Refresh</div>
            </div>
        )
    }

}

function CreateUser(){

    const[fName,setFName] = useState('');
    const[lName,setLName] = useState('');
    const[Email,setEmail] = useState('');

    function CriarBt(fName, lName, email){

        if(fName != null && lName != null && email != null){
            const User = {firstName: fName, lastName: lName, email: email}
            UserService.setUsers(User);
        }
        
    }

    return(
        <div className="CreateUser">
            <InputTitle type="text" placeHolder={"Primeiro Nome"} value={fName} onChange={e=>setFName(e.target.value)}/>
            <InputTitle type="text" placeHolder={"Ultimo Nome"} value={lName} onChange={e=>setLName(e.target.value)}/>
            <InputTitle type="text" placeHolder={"Email"} value={Email} onChange={e=>setEmail(e.target.value)}/>

            <div className="ButtonCreate" onClick={()=> CriarBt(fName, lName, Email)}>Criar</div>
        </div>
    )
}

function InputTitle({type, placeHolder, value, onChange}){

    const[text,setText] = useState('');

    return(
        <div className="classInputOut">
                    <input className="classInput"
                    type={type}
                    placeholder={placeHolder}
                    placeholderTextColor="gray"
                    value={value}
                    onChange={onChange}></input>
        </div>
    )
}

export default UserComponent;