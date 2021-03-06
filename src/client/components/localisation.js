import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(2),
    },
    placeholder: {
        height: 30,
    },
}));

export default function DelayingAppearance() {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState("idle");
    const timerRef = React.useRef();

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    function handleClickLoading() {
        setLoading(prevLoading => !prevLoading);
    }

    function handleClickQuery() {
        clearTimeout(timerRef.current);

        if (query !== "idle") {
            setQuery("idle");
            return;
        }

        setQuery("progress");
        timerRef.current = setTimeout(() => {
            setQuery("success");
        }, 2000);
    }

    return (
        <div className={classes.root}>
            <div className={classes.placeholder}>
                <Fade
                    in={loading}
                    style={{
                        transitionDelay: loading ? "800ms" : "0ms",
                    }}
                    unmountOnExit>
                    <CircularProgress />
                </Fade>
            </div>
            <div className={classes.placeholder}>
                {query === "success" ? (
                    <Typography>POSITION FOUND</Typography>
                ) : (
                    <Fade
                        in={query === "progress"}
                        style={{
                            transitionDelay:
                                query === "progress" ? "800ms" : "0ms",
                        }}
                        unmountOnExit>
                        <CircularProgress />
                    </Fade>
                )}
            </div>
            <Button
                variant={"contained"}
                onClick={handleClickQuery}
                className={classes.button}>
                {query !== "idle" ? "Cancel" : "Localisation"}
            </Button>
        </div>
    );
}
