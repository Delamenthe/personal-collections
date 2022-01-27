import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ThemeBar from "../components/ThemeBar";
import CollectionList from "../components/CollectionList";


const Collections = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ThemeBar/>
                </Col>
                <Col md={9}>
                    <CollectionList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Collections;