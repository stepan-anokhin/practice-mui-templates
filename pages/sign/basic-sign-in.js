import React from "react";
import {Container} from "@material-ui/core";
import theme from "../../src/dashboard/theme";
import SignIn from "../../src/components/SignIn";
import nextJsPage from "../../src/components/nextJsPage";


function Page() {
    return (
        <Container maxWidth="xs">
            <SignIn/>
        </Container>
    );
}

export default nextJsPage(Page, theme);