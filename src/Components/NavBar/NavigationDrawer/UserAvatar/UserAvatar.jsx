import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const UserAvatar = (props) =>{
    return (
        <Grid container justify={'center'}>
            <Avatar src={`${props.avatarUrl}`} />
        </Grid>
        )
}
export default UserAvatar