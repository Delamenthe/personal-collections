import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {COLLECTIONS_ROUTE} from "../utils/consts";

const CollectionItem = ({collection}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={()=>navigate(COLLECTIONS_ROUTE+collection._id)}>
            <Card style={{width: 300, cursor: "pointer"}} border={"light"}>
                <Image width={300} height={300} src={'https://res.cloudinary.com/delamenthe/image/upload/c_fill,h_300,w_300,x_0/v1643536783/'+collection.img+'.jpg'}/>
                <h4>{collection.name}</h4>
                <div>{collection.description}</div>
            </Card>
        </Col>
    );
};

export default CollectionItem;