import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import {CardContent, Hidden, makeStyles, Typography} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        height: '100%',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    item: {
        height: '100%'
    },
}));


function PreviewListItem(props) {
    const {item} = props;
    const classes = useStyles();

    return (
        <Grid item key={item.title} xs={12} md={6}>
            <Link href={item.link}>
                <CardActionArea className={classes.item}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image={item.image}
                                title={item.title}
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Link>
        </Grid>
    );
}


function PreviewList(props) {
    const {items} = props;

    return (
        <Grid container spacing={4} alignItems="stretch">
            {items.map(item => (
                <PreviewListItem item={item} key={item.title}/>
            ))}
        </Grid>
    );
}


export default PreviewList;