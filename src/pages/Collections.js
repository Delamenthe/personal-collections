import React, {useContext, useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import CollectionList from "../components/CollectionList";
import {fetchCollections} from "../http/CollectionAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Collections = observer(() => {
    const {collection} = useContext(Context)

    useEffect(()=>{
        fetchCollections().then(data=>collection.setCollections(data))
    },[])


    return (
        <Container className="mt-2">
            <Row>
                    <CollectionList/>
            </Row>
        </Container>
    );
});

export default Collections;