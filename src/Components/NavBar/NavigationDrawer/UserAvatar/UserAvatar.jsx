import React from "react";
import Avatar from "@material-ui/core/Avatar";

const UserAvatar = (props) =>{
    return (
        <Avatar alt="Remy Sharp" src={`${props.avatarUrl}`} />
    )
}
export default UserAvatar