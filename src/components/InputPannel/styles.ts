import styled from "styled-components";
import {IProps} from "./index"
export const Container=styled.input.attrs({type:"number"})<IProps>`
background-color:var(--bg-color);
 border:none;
 appearance: none;
 -webkit-appearance:none;
 outline:none;
 color:#fff;
 text-align:center;
`;