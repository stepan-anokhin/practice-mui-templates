import React from "react";
import {Container} from "@material-ui/core";
import theme from "../../src/dashboard/theme";
import nextJsPage from "../../src/components/nextJsPage";
import SignUp from "../../src/components/SignUp";


function Page() {
    return (
        <Container maxWidth="xs">
            <SignUp/>
        </Container>
    );
}

export default nextJsPage(Page, theme);