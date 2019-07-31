import styled from "styled-components";

export const FlexContainer = styled.div`
	position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    span{
        vertical-align: initial;
        flex-basis: 50%;
    }
`;

export const SecondContainer = styled.div`
    display block;
    position:relative;
    width:100%;
`;

export const FormCreateuser = styled.form`

    display:block;
    width:900px;
    margin:0 auto;

`;

export const InnerContainer = styled.div`

    display:block;

`;