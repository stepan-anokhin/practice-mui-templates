import React, {useState} from "react";
import {CssBaseline, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import menuCategories from '../../../src/dashboard/mini/menu-items';
import MenuItemCategory from "../../../src/dashboard/mini/MenItemGroup";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {},
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    // This class describes how the
    // app-bar looks when sidebar
    // is open:
    appBarShifted: {
        // Leave a space for the top-most
        // sidebar button (a close-button)
        marginLeft: drawerWidth,
        // Calculate app-bar width when
        // the appropriate space to the left
        // is given to the sidebar menu
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
        width: drawerWidth,
        // this transition describes how
        // sidebar menu is shrunk when it is close
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        // make sure there is no scrollbar
        // below the menu icons
        overflowX: 'hidden',
        width: theme.spacing(7),
        // this transition describes how
        // sidebar menu is stretched when it is close
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            // this value should fit the
            // width of menu item icons
            width: theme.spacing(9),
        },
    },
    // sidebar menu close-button styles:
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
                {/* Close-menu button*/}
                <div className={classes.closeButton}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                {/* Menu items: */}
                {menuCategories.map(category => (<MenuItemCategory {...category}/>))}
            </Drawer>
        </div>
    );
}

export default Index;