import styled from "styled-components";
import {IProps} from "./index";

export const Container=styled.div<IProps>`
    max-width:400px;
    height:350px;
    border-radius:${props=>props?.radius};
    box-shadow:0 0 0 10px rgba(255,255,255,0.1);
    background:var(--primary-color);
    display:grid;
   grid-template-columns:1fr 1fr;
   grid-gap:10px;
`;