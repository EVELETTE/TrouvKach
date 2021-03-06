import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label={"menu"} />
            <InputBase
                className={classes.input}
                placeholder={"Search Maps"}
                inputProps={{"aria-label": "Search Maps"}}
            />
            <IconButton className={classes.iconButton} aria-label={"search"}>
                <SearchIcon />
            </IconButton>
            <IconButton
                color={"primary"}
                className={classes.iconButton}
                aria-label={"directions"}
            />
        </Paper>
    );
}
