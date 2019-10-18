import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LandingToolbar from "../src/landing/LandingToolbar";
import LandingDescription from "../src/landing/LandingDescription";


function Index() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <LandingToolbar/>
                <main>
                    <LandingDescription/>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default Index;