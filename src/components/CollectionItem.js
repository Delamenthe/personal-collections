import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {COLLECTIONS_ROUTE} from "../utils/consts";

const CollectionItem = ({collection}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={()=>navigate(COLLECTIONS_ROUTE+collection.id)}>
            <Card style={{width: 300, cursor: "pointer"}} border={"light"}>
                <Image width={300} height={300} src={'https://res.cloudinary.com/delamenthe/image/upload/v1643469481/'+collection.img+'.jpg'}/>
                <h4>{collection.name}</h4>
                <div>{collection.description}</div>
            </Card>
        </Col>
    );
};

export default CollectionItem;