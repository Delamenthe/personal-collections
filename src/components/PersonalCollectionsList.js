import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CollectionItem from "./CollectionItem";
import {fetchCollections, fetchThemes} from "../http/CollectionAPI";
import {fetchUser} from "../http/userAPI";


const CollectionList = observer(() => {
    const {collection} = useContext(Context)
    const {user}=useContext(Context)

    useEffect(()=>{
        fetchUser().then(data=>user.setUser(data))
    },[])

    return (
        <Row className="d-flex">
            {collection.collections.map((collection) =>
                user.user.id===collection.author_id ? <CollectionItem  key={collection.id} collection={collection}/> :<></>
            )}
        </Row>
    );
});

export default CollectionList;