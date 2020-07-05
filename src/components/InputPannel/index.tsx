import React from "react";
import {Container} from "./styles"

export type IProps={
 radius:number
}

const InputPannel:React.FC<IProps>=({...rest})=>{
    
    return <Container {...rest} />
}
export default InputPannel;