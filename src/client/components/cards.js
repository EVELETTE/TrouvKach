import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ArgentaImg from "../assets/argenta.jpg";
import AxaImg from "../assets/axa.jpg";
import BelfiusImg from "../assets/belfius.jpg";
import BeoImg from "../assets/beo.jpg";
import BkcpImg from "../assets/bkcp.jpg";
import BpostImg from "../assets/bpost.jpg";
import CbcImg from "../assets/cbc.jpg";
import CrelanImg from "../assets/crelan.jpg";
import DeltaImg from "../assets/delta.jpg";
import DeutscheImg from "../assets/deutsche.jpg";
import FortisImg from "../assets/fortis.jpg";
import IngImg from "../assets/ing.jpg";
import KbcImg from "../assets/kbc.jpg";
import KeytradeImg from "../assets/keytrade.jpg";

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
                    image={ArgentaImg}
                    title={"ARGENTA"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={AxaImg}
                    title={"AXA"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={BelfiusImg}
                    title={"BELFIUS"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={BeoImg}
                    title={"BEO"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={BkcpImg}
                    title={"BKCP"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={BpostImg}
                    title={"BPOST"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={CbcImg}
                    title={"CBC"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={CrelanImg}
                    title={"CRELAN"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={DeltaImg}
                    title={"DELTA"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={DeutscheImg}
                    title={"DEUTSCHE"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={FortisImg}
                    title={"FORTIS"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={IngImg}
                    title={"ING"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={KbcImg}
                    title={"KBC"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={KeytradeImg}
                    title={"KEYTRADE"}
                />
                <CardContent />
            </CardActionArea>
            <CardActions>
                <Button size={"small"}>{"See more"}</Button>
            </CardActions>
        </Card>
    );
}
