import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CollectionItem from "./CollectionItem";

const ItemsList = observer(() => {
    const {collection} = useContext(Context)
    return (
        <Row className="d-flex justify-content-start">
            {collection.collections.map(collection =>
                <CollectionItem key={collection.id} collection={collection}/>
            )}
        </Row>
    );
});

export default ItemsList;