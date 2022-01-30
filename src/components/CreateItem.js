import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {createItem, fetchTags,} from "../http/ItemAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import {Context} from "../index";
import {toJS} from "mobx";
import {fetchOneCollection} from "../http/CollectionAPI";

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

const CreateItem =  observer(({show,onHide,id}) => {

    const {item}=useContext(Context)
    const [name, setName] = useState('')
    const [file, setFile] = useState('')

    const addItem = async () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('tags', toJS(item.selectedTag)._id)
        formData.append("img", file)
        formData.append("collection_id", id)
        const data = await createItem(formData).then(data => onHide())
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
                    Add new Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2" >
                    <Dropdown.Toggle>{item.selectedTag.name || "Choose tag"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {item.tags.map(tag =>
                            <Dropdown.Item
                                onClick={() => item.setSelectedTag(tag)}
                                key={tag.id}
                            >
                                {tag.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className="mt-3"
                    placeholder="Enter item name"
                />
                <div className="mt-3" {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <div>Drag and drop your image here.</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addItem}>Add</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateItem;