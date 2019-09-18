import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BelfiusImg from "../assets/belfius.jpg";
import IngImg from "../assets/ing.jpg";
import FortisImg from "../assets/fortis.jpg";

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
                    image={BelfiusImg}
                    title={"belfius"}
                />
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                        {"BELFIUS"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"primary"}>
                    {"See more"}
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={IngImg}
                    title={"ing"}
                />
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                        {"ING"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"primary"}>
                    {"See more"}
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={FortisImg}
                    title={"fortis"}
                />
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                        {"FORTIS"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"primary"}>
                    {"See more"}
                </Button>
            </CardActions>
        </Card>
    );
}
