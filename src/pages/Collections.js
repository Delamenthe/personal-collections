import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CollectionList from "../components/CollectionList";
import {fetchCollections, fetchThemes} from "../http/CollectionAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CreateCollection from "../components/CreateCollection";

const Collections = observer(() => {
    const [collectionVisible, setCollectionVisible] = useState(false)
    const {collection} = useContext(Context)
    const {user}=useContext(Context)

    useEffect(()=>{
        fetchThemes().then(data=>collection.setThemes(data))
        fetchCollections().then(data=>collection.setCollections(data))
    },[])


    return (
        <Container>
            {user._isAuth ?
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
            : <h5 className={"text-md-center mt-2"}> To create collections you need to authenticate</h5>
            }
            <Container className="mt-2">
                <Row>
                    <CollectionList/>
                </Row>
            </Container>
        </Container>

    );
});

export default Collections;