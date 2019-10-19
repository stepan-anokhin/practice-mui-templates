import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(4),
    },
    link: {
        cursor: 'pointer',
    },
}));

function PageBreadCrumbs(props) {
    const {path} = props;
    const parents = path.slice(0, -1);
    const current = path[path.length - 1];
    const classes = useStyles();

    return (
        <Breadcrumbs className={classes.root}>
            {parents.map(item => (
                <Link href={item.link}>
                    <MuiLink className={classes.link} color="inherit">
                        {item.name}
                    </MuiLink>
                </Link>
            ))}
            <Link>
                <MuiLink color="textPrimary">
                    {current.name}
                </MuiLink>
            </Link>
        </Breadcrumbs>
    );
}

export default PageBreadCrumbs;