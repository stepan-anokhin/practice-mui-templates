import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon, ListItemText} from "@material-ui/core";


export default function MenuItem(props) {
    const {item} = props;
    const {icon: Icon, text} = item;

    return (
        <ListItem button>
            <ListItemIcon>
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    );
}