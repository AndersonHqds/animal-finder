import styled from "styled-components";

export const fileuploader = styled.span`
  height: auto;
  display: flex;
  flex-direction:column;
  width: 100%;
  align-items: center;
  margin: 10px 0;
`;

export const fileinput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;