import React from "react";
import { Container } from "./styles";
import Input from "./../InputPannel"
interface IProps {
  radius?: [number, number, number, number];
}

const Pannel: React.FC<IProps> = ({ radius }) => {
  return (
    <Container>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    </Container>
  );
};

export default Pannel;
