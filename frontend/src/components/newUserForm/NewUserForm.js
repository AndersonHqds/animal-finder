import styled from "styled-components";

export const FlexContainer = styled.div`
	position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;    
    span{
        vertical-align: initial;                
    }
`;

export const SecondContainer = styled.div`
    display flex;
    position:relative;
    width:100%;
    flex-wrap:wrap;
    justify-content:space-between;
     > span{    
        margin: 1em 0;
        width:48%;
    }
`;

export const FormCreateuser = styled.form`

    display:block;
    width:600px;
    margin:0 auto;

`;

export const InnerContainer = styled.div`
    display: flex;
    padding-left: 35px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    > span{
        margin: 1em 0;
        max-width:100%;
        width:100%;
        &:nth-child(2){
            margin-bottom:0;
        }
    }
`;