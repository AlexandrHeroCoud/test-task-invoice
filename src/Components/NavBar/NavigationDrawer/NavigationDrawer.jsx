import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LinkMaterial from "@material-ui/core/Link";
import {Link} from "react-router-dom";
import UserAvatar from "./UserAvatar/UserAvatar";
import Grid from "@material-ui/core/Grid";


const NavigationDrawer =(props)=> {
    return (
        <div>
                <>
                    <Drawer anchor={'left'} open={props.open} onClose={props.toggleDrawer('left', false)}>
                        <Grid container >
                            <Grid item xs={12} >
                                <UserAvatar avatarUrl={props.avatarUrl}/>
                            </Grid>
                            <Grid item xs={12}>
                                <List>
                                    {props.links.map((url) => (
                                        <Link to={url}>
                                            <LinkMaterial to={url}>
                                                <ListItem button key={url}>
                                                        <ListItemIcon><DirectionsRunIcon fontSize={'small'}/></ListItemIcon>
                                                        <ListItemText primary={url} />
                                                </ListItem>
                                            </LinkMaterial>
                                        </Link>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Drawer>
                </>
        </div>
    );
}

export default NavigationDrawer
