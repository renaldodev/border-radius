import React from "react";
import { Container } from "./styles";
import Input from "./../InputPannel";

export interface IProps {
  radius?: [number, number, number, number];
}

const Pannel: React.FC<IProps> = ({ radius }) => {
  return (
    <Container>
    <Input radius={0}/>
    <Input radius={0}/>
    <Input radius={0}/>
    <Input radius={0}/>
    </Container>
  );
};

export default Pannel;
