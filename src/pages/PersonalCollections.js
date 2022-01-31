import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CreateCollection from "../components/CreateCollection";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCollections, fetchThemes} from "../http/CollectionAPI";
import PersonalCollectionsList from "../components/PersonalCollectionsList";
import {useNavigate} from "react-router-dom";
import {CREATE_COLLECTION_ROUTE} from "../utils/consts";

    const PersonalCollections = observer(() => {
        const navigate = useNavigate();
        const [collectionVisible, setCollectionVisible] = useState(false)
        const {collection} = useContext(Context)
        const {user}=useContext(Context)

        useEffect(()=>{
            fetchThemes().then(data=>collection.setThemes(data))
            fetchCollections().then(data=>collection.setCollections(data))
        },[])


        return (
            <Container>
                <h1 className="text-center mt-3">MY COLLECTIONS</h1>
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
                <Container className="mt-2">
                    <Row>
                        <PersonalCollectionsList/>
                    </Row>
                </Container>
            </Container>

        );
    });

export default PersonalCollections;