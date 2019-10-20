import React, {useState} from "react";
import {CssBaseline, makeStyles, Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {ThemeProvider} from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import Head from "next/head";

import MenuCategory from "../../src/dashboard/components/MenuCategory";
import menuCategories from '../../src/views/Dashboard/menu-items';
import theme from '../../src/dashboard/theme';
import DashboardContent from "../../src/dashboard/components/DashboardContent";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        // spacing between menu-button
        // and a toolbar title
        marginRight: theme.spacing(3),
    },
    title: {
        // This is required to make sure
        // toolbar title grabs all the
        // available space inside the toolbar
        flexGrow: 1,
    },
    // drawer's top-spacer styles:
    drawerTopSpacer: theme.mixins.toolbar,
    // drawer menu items
    drawerMenu: {
        width: 250,
    },
    // these styles describe page content container
    content: {
        // grab all the remaining space by
        // the page content.
        flexGrow: 1,
        // it is this property that ensures that
        // drawer is expanded to the very bottom
        // of the page.
        height: '100vh',
        // show scrollbar when content doesn't fit
        // the viewport height.
        overflow: 'auto',
    },
    // App-bar is displayed 'above' all the content.
    // So the top-most content will be covert by
    // the app-bar. One solution is to place an
    // empty `spacer` element at the top of the content
    // having the same size as app-bar.

    // By using toolbar mixin we ensure spacer to be
    // of the same height as the app-bar.
    contentAppBarSpacer: theme.mixins.toolbar,

    // To control content padding and max width
    // we introduce another wrapper - a `Container`
    contentContainer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

function Index() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div>
            <CssBaseline/>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Temporary Drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={handleDrawerClose}>
                <div className={classes.drawerTopSpacer}/>
                {menuCategories.map(category => (
                    <MenuCategory
                        className={classes.drawerMenu}
                        {...category}
                    />
                ))}
            </Drawer>
            <main className={classes.content}>
                {/* Content space to fill the space behind app-bar */}
                <div className={classes.contentAppBarSpacer}/>
                {/* Actual page content container */}
                <Container className={classes.contentContainer}>
                    <DashboardContent/>
                </Container>
            </main>
        </div>
    );
}

function Page() {
    return (
        <React.Fragment>
            <Head>
                <title>Mini variant Drawer</title>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"/>
            </Head>
            <ThemeProvider theme={theme}>
                <Index/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Page;