import React, {useEffect, useState} from 'react';
import {Container, Image, Row} from "react-bootstrap";
import ItemsList from "../components/ItemsList";
import {useParams} from "react-router-dom";
import {fetchOneCollection} from "../http/CollectionAPI";

const Collection = () => {
    const [collection, setCollection] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneCollection(id).then(data => setCollection(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row >
                <Image height={300} src={process.env.REACT_APP_API_URL + collection.img}/>
            </Row>
            <Row>
                <ItemsList/>
            </Row>
        </Container>
    );
};

export default Collection;