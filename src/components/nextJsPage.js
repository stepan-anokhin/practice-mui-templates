import React from "react";
import Head from "next/dist/next-server/lib/head";
import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";


export default function nextJsPage(Component, theme) {
    return () => (
        <React.Fragment>
            <Head>
                <title>Template Practice</title>
            </Head>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Component/>
            </ThemeProvider>
        </React.Fragment>
    );
}