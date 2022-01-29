import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCollection from "../components/CreateCollection";

const Admin = () => {
    const [collectionVisible, setCollectionVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCollectionVisible(true)}
            >
                Add collection
            </Button>
            <CreateCollection show={collectionVisible} onHide={() => setCollectionVisible(false)}/>
        </Container>
    );
};

export default Admin;