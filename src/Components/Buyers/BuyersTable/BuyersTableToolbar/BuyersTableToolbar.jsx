import {useToolbarStyles} from "../BuyersTableStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const BuyersTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const [error, setError] = useState(false)
    const handlerOnChange = () =>{
        if(props.searchResultLength < 1 && props.searchText != null) {
            debugger
            setError(true)
        } else{
            setError(false)
        }
    }
    return (
        <Toolbar
            className={classes.root}
        >
            <Tooltip arrow={true} title={error?"Search has turned up squat.":"Search buyer by name."} placement={'right'}>
                <TextField placeholder={'Search by name buyer'}
                           value={props.searchText}
                           error={error}
                           onChange={(event)=> {
                               props.setSearchText(event.target.value)
                               handlerOnChange()
                               }}
                               onBlur={()=>{setError(false)}}
                />
            </Tooltip>
        </Toolbar>
    );
};
export default BuyersTableToolbar