import styled from "styled-components";

export const FileUploaderSpan = styled.span`
    &.active{
        img{
             display:block;
        }
    }
    &:hover{
        figure{
            &:before{
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
            }
            &:after{
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
                -webkit-transition-delay: 0.175s;
                transition-delay: 0.175s;
            }
        }
    }
    span{
        display:block;
        background-color:#f7674d;
        padding:10px;
        box-sizing:border-box;
        font-size:15px;
        color:#FFF;
        margin-top:10px;
    }
    &.active{
        svg{
            opacity : 0 ;
        }
        &:hover{
            svg {
                opacity : 1;
            }
        }
    }
`;

export const ImgInputFile = styled.img`
  display:none;
  width: 170px;
  height: 170px;
  position:relative;
`;
export const InputFile = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
    & + label{
        font-size: 1.25em;
        font-weight: 700;
        color: #000;
        background-color:transparent;
        display: inline-block;
    }
    &:focus + label, + label:hover, + label{
         cursor:pointer;
    }
    
`;
export const FigureInput = styled.figure`
        height: 170px;
        width: 170px;    
        margin: 0;
        position:relative;
        background-color:#f7674d;
        overflow:hidden;
        &:before{
            background-color:#ff935a;
            z-index:1;
            transition: transform .5s cubic-bezier(0.75, 0, 0.125, 1);
        }
        &:after,&:before{
            content:"";
            position:absolute;
            bottom:100%;
            left:0;
            right:0;
            width:100%;
            height:100%;
            z-index:1;
        }
        &:after{
            transition: transform .5s cubic-bezier(1,.02,.84,.74); 
            background-color:#f7674d;        
        }
        & svg{
            position:absolute;
            top:50%;
            z-index:3;
            margin: auto;
            left: 0;
            right: 0; 
            transform: translateY(-50%);
            height: 50px;
            width: 50px;
            fill: #FFF;
            transition: opacity .2s ease-in-out;
        }

`;