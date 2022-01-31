import React, {useContext, useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import CollectionList from "../components/CollectionList";
import {fetchCollections, fetchThemes} from "../http/CollectionAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Collections = observer(() => {
    const {collection} = useContext(Context)

    useEffect(()=>{
        fetchThemes().then(data=>collection.setThemes(data))
        fetchCollections().then(data=>collection.setCollections(data))
    },[])


    return (
        <Container>
            <Container className="mt-2">
                <Row>
                    <CollectionList/>
                </Row>
            </Container>
        </Container>

    );
});

export default Collections;