import React, {useState} from "react";
import {AppBar, Container, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@material-ui/core";
import Head from "next/head";
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import MenuIcon from "@material-ui/icons/Menu";

import theme from "../../src/dashboard/theme";
import DashboardContent from "../../src/dashboard/components/DashboardContent";
import DrawerMenu from "../../src/dashboard/components/DrawerMenu";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
    },
    permanentDrawerPaper: {
        // without this property content will
        // be hidden behind the drawer.
        position: 'relative',
        width: drawerWidth,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    temporaryDrawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    contentSpacer: theme.mixins.toolbar,
    contentContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

function Page() {
    const classes = useStyles();
    const [temporaryOpen, setTemporaryOpen] = useState(false);
    const handleTemporaryOpen = () => setTemporaryOpen(true);
    const handleTemporaryClose = () => setTemporaryOpen(false);

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleTemporaryOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Responsive Drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{paper: classes.permanentDrawerPaper}}>
                <DrawerMenu/>
            </Drawer>
            <Drawer open={temporaryOpen} classes={{paper: classes.temporaryDrawerPaper}} onClose={handleTemporaryClose}>
                <DrawerMenu variant="button" onClose={handleTemporaryClose}/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.contentSpacer}/>
                <Container className={classes.contentContainer}>
                    <DashboardContent/>
                </Container>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Head>
                <title>Responsive Drawer</title>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"/>
            </Head>
            <ThemeProvider theme={theme}>
                <Page/>
            </ThemeProvider>
        </React.Fragment>
    )
}