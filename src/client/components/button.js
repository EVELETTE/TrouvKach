import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: "none",
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={"headerbutton"}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}>
                Home
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}>
                Banks
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}>
                Terminals
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}>
                Map
            </Button>
        </div>
    );
}
