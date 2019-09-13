import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Cards from "../components/cards";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(5, 5),
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Welcome
                </Typography>
                <Typography component="p">
                    TrouvKash is the best app to find cash !
                    <Cards />
                </Typography>
            </Paper>
        </div>
    );
}
