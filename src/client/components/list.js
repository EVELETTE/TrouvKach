import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel1bh-content"}
                    id={"panel1bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel2bh-content"}
                    id={"panel2bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel3bh-content"}
                    id={"panel3bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel4bh-content"}
                    id={"panel4bh-header"}>
                    <Typography className={classes.heading}>
                        {"Terminal"}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {"Distance"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Adress</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
