import React, {useEffect} from "react";
import {Container} from "@material-ui/core";
import {getBuyer} from "../../Redux/Reducers/BuyerReducer";
import {connect} from "react-redux";
import BuyerCard from "./BuyerCard/BuyerCard";
import {useParams} from 'react-router-dom';


const Buyer = (props) =>{
    let param = useParams();
    useEffect(()=>{
        const id = param.id
        props.getBuyer(id)
    })
    return (
        <Container>
            <BuyerCard data={props.state}/>
        </Container>
    )
}
const mapState = (state)=>({
})
export default connect(mapState,{getBuyer})(Buyer)

