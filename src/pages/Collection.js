import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneCollection} from "../http/CollectionAPI";
import CreateItem from "../components/CreateItem";
import CollectionItem from "../components/CollectionItem";
import {Context} from "../index";
import {fetchItems} from "../http/ItemAPI";
import {observer} from "mobx-react-lite";

const Collection = observer(() => {
    const [itemVisible, setItemVisible] = useState(false)
    const [collection, setCollection] = useState({info: []})
    const {id} = useParams()

    const {item} = useContext(Context)

    useEffect(() => {
        fetchOneCollection(id).then(data => setCollection(data))
        fetchItems().then(data => item.setItems(data))
    }, [])

    return (
        <Container className="mt-3">
            <Card className="bg text-white text-center">
                <Card.Img height={300} src={'https://res.cloudinary.com/delamenthe/image/upload/v1643469483/'+collection.img+'.jpg'}/>
            </Card>
            <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
                <Card.Text>{collection.description}</Card.Text>
            </Card.Body>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setItemVisible(true)}
            >Add Item</Button>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)} id={id}/>
            <ListGroup className="list-group-flush">
                {item.items.map(item =>
                    <ListGroupItem>{item.name}</ListGroupItem>
                )}
            </ListGroup>
            {/*<Table className="mt-4" striped bordered hover size="sm">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>#</th>*/}
            {/*        <th>Name</th>*/}
            {/*        <th>Tags</th>*/}
            {/*        <th>Image</th>*/}
            {/*        <th>Creation Date</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {item.items.map(item =>*/}
            {/*        <tr>*/}
            {/*            <td>item.id</td>*/}
            {/*            <td>item.name</td>*/}
            {/*            <td>item.tags</td>*/}
            {/*            <td>Date</td>*/}
            {/*        </tr>*/}
            {/*    )}*/}
            {/*    </tbody>*/}
            {/*</Table>*/}
        </Container>

    );
});

export default Collection;