import React from 'react';
import {Container, Row} from "react-bootstrap";
import CollectionBar from "../components/CollectionBar";
import ItemsList from "../components/ItemsList";

const Collection = () => {

    return (
        <Container>
            <Row >
                <CollectionBar/>
            </Row>
            <Row>
                <ItemsList/>
            </Row>
        </Container>
    );
};

export default Collection;