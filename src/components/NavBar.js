import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, COLLECTIONS_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

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
                        <Button
                            variant={"outline-light"}
                            onClick={()=>navigate(ADMIN_ROUTE)}
                        >Admin Panel</Button>
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