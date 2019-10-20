import React from "react";
import {ListSubheader} from "@material-ui/core";
import MenuItem from "./MenuItem";
import List from "@material-ui/core/List";

export default function MenuCategory(props) {
    const {title, items, ...rest} = props;
    const subheader = title ? (<ListSubheader inset>{title}</ListSubheader>) : null;

    return (
        <List {...rest}>
            <div>
                {subheader}
                {items.map(item => (<MenuItem item={item} key={item.text}/>))}
            </div>
        </List>
    );
}