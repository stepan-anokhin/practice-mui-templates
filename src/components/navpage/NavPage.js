import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import NavPageToolbar from "./NavPageToolbar";
import NavPageDescription from "./NavPageDescription";
import PreviewList from "./PreviewList";


function NavPage(props) {
    const {description, items} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <NavPageToolbar/>
                <main>
                    <NavPageDescription description={description}/>
                    <PreviewList items={items}/>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default NavPage;