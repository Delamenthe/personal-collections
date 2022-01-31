import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneCollection} from "../http/CollectionAPI";
import CreateItem from "../components/CreateItem";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchItems,fetchTags} from "../http/ItemAPI";

const Collection = observer(() => {
    const [itemVisible, setItemVisible] = useState(false)
    const [collection, setCollection] = useState({info: []})
    const {id} = useParams()

    const {item} = useContext(Context)

    useEffect(() => {
        fetchOneCollection(id).then(data => setCollection(data))
        fetchItems().then(data => item.setItems(data))
        fetchTags().then(data => item.setTags(data))

    }, [])


    return (
        <Container className="mt-3">
            <Card className="bg text-white text-center">
                <Card.Img height={300} src={'https://res.cloudinary.com/delamenthe/image/upload/c_fill,h_300,w_1000,x_0/v1643536783/'+collection.img+'.jpg'}/>
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
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Name</th>
                    <th>Tags</th>
                    <th>Creation Date</th>

                </tr>
                </thead>
                <tbody>
                {item.items.map(item =>
                    item.collection_id === collection._id
                        ?
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>{item.name}</td>
                            <td>{item.tags}</td>
                            <td>{item.creation_date}</td>
                    </tr>
                        :<></>
                )}
                </tbody>
            </Table>
        </Container>

    );
});

export default Collection;