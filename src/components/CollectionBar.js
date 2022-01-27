import React, from 'react';
import {observer} from "mobx-react-lite";
import {Container, Image, Row} from "react-bootstrap";

const CollectionBar = observer( (collection) => {
    const coll = {id: 1, name: "My Books", theme_id: 1, description: "Books that makes you live", img: "https://i0.wp.com/www.marktechpost.com/wp-content/uploads/2018/12/book-bookcase-books-1166657.jpg?w=2048&ssl=1"}
    return (
        <Container>
            <Row style={{height:300}}>
                <h2 className="m-auto">{coll.name}</h2>
                <Image src={coll.img} height={250}/>
            </Row>
        </Container>
    );
});

export default CollectionBar;