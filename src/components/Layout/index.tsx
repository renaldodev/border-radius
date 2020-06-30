import React from "react";
import { Container } from "./styles";
interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Layout;
