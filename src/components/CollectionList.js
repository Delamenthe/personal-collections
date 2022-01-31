import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CollectionItem from "./CollectionItem";

const CollectionList = observer(() => {
    const {collection} = useContext(Context)
    return (
        <Row className="d-flex">
            {collection.collections.map((collection) =>
                <CollectionItem key={collection.id} collection={collection}/>
            )}
        </Row>
    );
});

export default CollectionList;