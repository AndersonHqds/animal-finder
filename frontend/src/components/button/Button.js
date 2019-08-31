import styled from "styled-components";


export const DefaultBtn = styled.button`
    padding: 10px;
    box-sizing: border-box;
    color: #FFF;
    background-color: #f7674d;
    border: none;
    border-radius: 5px;
    font-weight: 800;
    min-width: 100px;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    &:after,&:before{
        content: "";
        position:absolute;
        width:100%;
        height:100%;
    }
    &:after{
        background-color:#f74d2f;
    }
    &:before{
        background-color:#ff935a;
    }
`;