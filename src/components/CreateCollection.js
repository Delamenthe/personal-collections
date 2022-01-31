import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {createCollection, fetchThemes} from "../http/CollectionAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import {Context} from "../index";
import {toJS} from "mobx";

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
    const {user} = useContext(Context)
    const {collection}=useContext(Context)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        fetchThemes().then(data => collection.setThemes(data))
    }, [])

    const addCollection = async () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('theme_id', toJS(collection.selectedTheme)._id)
        formData.append('description',description)
        formData.append('author_id', user.user.id)
        formData.append("img", file)

        const data = await createCollection(formData).then(data => onHide())
    }

    const onDrop = useCallback(acceptedFiles => {
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
                <Dropdown className="mt-2 mb-2" >
                    <Dropdown.Toggle>{collection.selectedTheme.name || "Choose theme"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {collection.themes.map(theme =>
                            <Dropdown.Item
                                onClick={() => collection.setSelectedTheme(theme)}
                                key={theme.id}
                            >
                                {theme.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className="mt-3"
                    placeholder="Enter collection name"
                />
                <Form.Control
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    className="mt-3"
                    placeholder="Enter description"
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