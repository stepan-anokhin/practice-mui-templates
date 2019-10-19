import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PageToolbar from "./PageToolbar";
import PageDescription from "./PageDescription";
import PreviewList from "./PreviewList";


function Page(props) {
    const {description, items} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <PageToolbar/>
                <main>
                    <PageDescription description={description}/>
                    <PreviewList items={items}/>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default Page;