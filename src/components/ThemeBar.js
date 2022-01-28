import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";

const ThemeBar = observer(() => {
    const {collection} = useContext(Context)
    return (
        <ListGroup>
            {collection.themes.map(theme =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={theme.id === collection.selectedTheme.id}
                    onClick={()=>collection.setSelectedTheme(theme)}
                    key={theme.id}
                >
                    {theme.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default ThemeBar;