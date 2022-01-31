import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {Context} from "../index";
import {deleteUser, fetchUsers, updateUser} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const [users, setUsers] = useState([])
    const [masterChecked, setMasterChecked] = useState(false)
    const [selectedList, setSelectedList]=useState([])

    useEffect(()=>{
        fetchUsers().then(data=>setUsers(data))
    }, [])

    function onMasterCheck(e) {
        let tempList = users
        tempList.map((user) => (user.selected = e.target.checked))
        setMasterChecked(e.target.checked)
        setUsers(tempList)
        setSelectedList(users.filter((e) => e.selected))
    }

    function onItemCheck(e, item) {
        let tempList = users

        tempList.map(user => {
            if (user._id === item._id) {
                user.selected = e.target.checked;
            }
            return user;
        })
        setUsers(tempList)
        setMasterChecked(e.target.checked)
        setSelectedList(users.filter((e) => e.selected))
        console.log(selectedList)
    }

    function blockUsers(){
        selectedList.map(user => {
            updateUser(user._id, "BLOCKED").then(data => console.log(data))
        })
    }

    function unblockUsers(){
        selectedList.map(user => {
            updateUser(user._id, "ACTIVE").then(data => console.log(data))
        })
    }

    function changeRole(){
        selectedList.map(user =>
            user.role === "USER" ?  updateUser(user._id, user.status,"ADMIN").then(data => console.log(data))
                :  updateUser(user._id,user.status, "USER").then(data => console.log(data))
        )
    }

    function deleteUsers(){
        selectedList.map(user => {
            deleteUser(user._id).then(data => console.log(data))
        })
    }


    return (
        <Container>
            <Button
                className="mt-4"
                variant="warning"
                onClick={()=>blockUsers()}
            >
                Block</Button>{" "}
            <Button
                className="mt-4"
                variant="success"
                onClick={()=>unblockUsers()}
            >
                Unblock</Button>{" "}
            <Button
                className="mt-4"
                variant="danger"
                onClick={()=>deleteUsers()}
            >
                Delete</Button>{" "}
            <Button
                className="mt-4"
                variant="primary"
                onClick={()=>changeRole()}
            >
                Change role</Button>
        <Container className="d-flex flex-column">
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th><input
                        type="checkbox"
                        id="mastercheck"
                        checked={masterChecked}
                        onChange={(e) => onMasterCheck(e)}
                    /></th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>STATUS</th>
                    <th>SELECTED</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) =>(
                    <tr key={user._id} className={user.selected ? "selected" : ""}>
                        <th scope="row">
                            <input
                                type="checkbox"
                                id="rowcheck{user.id}"
                                checked={user.selected}
                                onChange={(e) => onItemCheck(e, user)}
                            />
                        </th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td>{user.selected ? "true":"false"}</td>
                    </tr>)
                )}
                </tbody>
            </Table>
        </Container>
        </Container>
    );
});

export default Admin;