import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, COLLECTIONS_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {check, fetchUser} from "../http/userAPI";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        navigate(LOGIN_ROUTE)
        user.setUser({})
        user.setIsAuth(false)
    }

    useEffect(()=>{
        check().then(() =>{
            fetchUser().then(data=>user.setUser(data))
        }).finally()
    }, [])

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={COLLECTIONS_ROUTE}>Collections</NavLink>
                {user.isAuth ?
                    <Nav className="ml-3">
                        <Button
                                variant={"outline-light"}
                                onClick={e => console.log(user.user.id)}
                        >{user.user.name}</Button>
                        {
                            user.user.role==="ADMIN" ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >Admin Panel</Button>
                            :
                            <></>
                        }
                        <Button
                            variant={"outline-light"}
                            onClick={()=> logOut()}
                            className="ml-2"
                        >Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Authorisation</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;