import React from "react";
import {Container, CssBaseline} from "@material-ui/core";
import Head from "next/head";
import theme from "../../src/dashboard/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import SignIn from "../../src/components/SignIn";


function Page() {
    return (
        <Container maxWidth="xs">
            <SignIn/>
        </Container>
    );
}

function App() {
    return (
        <React.Fragment>
            <Head>
                <title>Basic Sign-in</title>
            </Head>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Page/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;