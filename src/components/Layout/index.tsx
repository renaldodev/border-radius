import React from "react";
import { Container } from "./styles";
interface IProps {}

const Layout: React.FC<IProps> = ({ children ,...rest}) => {
  return <Container {...rest}>{children}</Container>;
};
export default Layout;
