import React, {useState} from "react";
import {CssBaseline, makeStyles, Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import {ThemeProvider} from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from "@material-ui/icons/Menu";

import MenuCategory from "../../../src/dashboard/MenuCategory";
import Budget from "../../../src/dashboard/Budget";
import TotalUsers from "../../../src/dashboard/TotalUsers";
import menuCategories from '../../../src/views/Dashboard/menu-items';
import theme from '../../../src/views/Dashboard/theme';
import TaskProgress from "../../../src/dashboard/TaskProgress";
import TotalProfit from "../../../src/dashboard/TotalProfit";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        // without this property the page content
        // will be displayed below the drawer
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // this transition defines how the
        // app-bar is being shrunk to the right
        // when drawer is expanded
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    // This class describes how the
    // app-bar looks when drawer is expanded
    appBarShifted: {
        // Leave a space for the top-most
        // drawer button (a close-button)
        marginLeft: drawerWidth,
        // Calculate app-bar width when
        // the appropriate space to the left
        // is given to the drawer
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        // spacing between menu-button
        // and a toolbar title
        marginRight: theme.spacing(3),
    },
    hidden: {
        // Hide the menu button
        display: 'none',
    },
    title: {
        // This is required to make sure
        // toolbar title grabs all the
        // available space inside the toolbar
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        // without this property there will be
        // a scroll-bar below the drawer
        // when it is being expanded
        overflowX: 'hidden',
        width: drawerWidth,
        // this transition describes how
        // drawer is being collapsed
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        // make sure there is no scrollbar
        // below the menu icons when drawer is close
        overflowX: 'hidden',
        // When the `[theme.breakpoints.up('sm')]` breakpoint
        // is not used it is this property that actually
        // defines width of the collapsed drawer
        width: theme.spacing(7),
        // this transition describes how
        // drawer is being expanded
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // TODO: understand why it is this breakpoint
        // TODO: that defines width of the close drawer...

        // TODO: understand why we need this breakpoint
        // TODO: even though drawer is successfully
        // TODO: collapsed by the normal `width` property
        [theme.breakpoints.up('sm')]: {
            // this value should fit the
            // width of menu item icons
            width: theme.spacing(9),
        },
    },
    // drawer's close-button styles:
    closeButton: {
        display: 'flex',
        alignItems: 'center',
        // make sure close-button icon is always
        // at the left end of the button:
        justifyContent: 'flex-end',
        padding: '0 8px',
        // make sure close-button size fits the toolbar size:
        ...theme.mixins.toolbar,
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
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShifted)}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.hidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Mini Drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
                open={open}
            >
                {/* Close-drawer button*/}
                <div className={classes.closeButton}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                {/* Drawer menu items: */}
                {menuCategories.map(category => (<MenuCategory {...category}/>))}
            </Drawer>
            <main className={classes.content}>
                {/* Content space to fill the space behind app-bar */}
                <div className={classes.contentAppBarSpacer}/>
                {/* Actual page content container */}
                <Container className={classes.contentContainer}>
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <Budget value={17000} diffPercent={-12}/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalUsers value={2300} diffPercent={+3}/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TaskProgress value={75.4}/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalProfit value={53000} />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

function Page() {
    return (
        <ThemeProvider theme={theme}>
            <Index/>
        </ThemeProvider>
    );
}

export default Page;