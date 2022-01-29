import React, {useCallback, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {createCollection} from "../http/CollectionAPI";
import {Button, Form, Modal} from "react-bootstrap";
import { useDropzone } from 'react-dropzone';


const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#5b5b5b',
    transition: 'border .3s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const CreateCollection =  observer(({show,onHide}) => {

    const [name, setName] = useState('')
    const [theme,setTheme] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [author,setAuthor] = useState('')

    const addCollection = async () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('theme_id',theme)
        formData.append('description',description)
        formData.append('author_id',author)
        formData.append("img", file)

        const data = await createCollection(formData).then(data => onHide())
    }

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0])
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                        Add new collection
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className="mt-3"
                    placeholder="Enter collection name"
                />
                <Form.Control
                    value={theme}
                    onChange={e=>setTheme(e.target.value)}
                    className="mt-3"
                    placeholder="Enter theme ID"
                />
                <Form.Control
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    className="mt-3"
                    placeholder="Enter description"
                />
                <Form.Control
                value={author}
                onChange={e=>setAuthor(e.target.value)}
                className="mt-3"
                placeholder="Enter author ID"
                />
                <div className="mt-3" {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <div>Drag and drop your image here.</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addCollection}>Add</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateCollection;