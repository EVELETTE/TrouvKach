import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Banks1 from "../assets/belfius.jpg";
import Banks2 from "../assets/ing.jpg";
import Banks3 from "../assets/fortis.jpg";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="../assets/belfius.jpg"
                    title="belfius"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Belfius Gretry
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        Rue Gretry 67 4020 Liege
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    See more
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="../assets/fortis.jpg"
                    title="ing"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ING Gretry
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        Rue Grétry 76 4020 Liège
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    See more
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="../assets/ing.jpg"
                    title="ing"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Fortis Gretry
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        Rue Grétry 30 4020 Liège
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    See more
                </Button>
            </CardActions>
        </Card>
    );
}
