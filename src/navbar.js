import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

function NavBar() {
    return (
        <List component={"nav"}>
            <ListItem component={"div"}>
                <ListItemText inset>
                    <TypoGraphy color={"inherit"} variant={"title"}>
                        {"Home"}
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color={"inherit"} variant={"title"}>
                        {"Banks"}
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color={"inherit"} variant={"title"}>
                        {"Map"}
                    </TypoGraphy>
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default NavBar;
