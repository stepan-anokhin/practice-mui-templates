import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import {CardContent, Hidden, makeStyles, Typography} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));


function PreviewListItem(props) {
    const {item} = props;
    const classes = useStyles();

    return (
        <Grid item key={item.title} xs={12} md={6}>
            <CardActionArea component="a" href="">
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
        </Grid>
    );
}


function PreviewList(props) {
    const {items} = props;

    return (
        <Grid container spacing={4}>
            {items.map(item => (
                <PreviewListItem item={item}/>
            ))}
        </Grid>
    );
}


export default PreviewList;