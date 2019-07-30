import styled from "styled-components";


export const InputHolder = styled.span`
    position: relative;
	z-index: 1;
	display: inline-block;
	margin: 1em;
	max-width: 350px;
	width: 100%;
    vertical-align: top;    
     .inputFilled ${InputLabel} ${InputLabelContent}{
        color: #ff935a;
	    -webkit-transform: translate3d(0, -1em, 0) scale3d(0.655, 0.655, 1);
	    transform: translate3d(0, -1em, 0) scale3d(0.655, 0.655, 1);
    }
     .inputFilled ${InputLabel}:after{
        background: #ff935a;
	    -webkit-transform: scale3d(1, 0.25, 1);
	    transform: scale3d(1, 0.25, 1);
    }
`;
export const InputLabelContent = styled.span`
	position: relative;
	display: block;
	padding: 1.6em 0;
    width: 100%;
    padding: 0;
    color:#f7674d;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.3s, color 0.3s;
	transition: transform 0.3s, color 0.3s;
`;


export const InputLabel = styled.label`
	display: block;    
    position: absolute;
    z-index:2;
	padding: 0 1em;
    width: 100%;
    text-align: left;
	color: #696969;
	font-weight: bold;
    font-size: 1em;
    padding: 2px 0 5px;
    pointer-events: none;
    top:0;
    left:0;
    float:none;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
    user-select: none;
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #B7C3AC;
        left: 0;
        top: 100%;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
        transition: transform 0.3s, background-color 0.3s;  
    }
`;
export const InputAdvice = styled.p`
    display:block;
    margin:0;
    position:relative;
    opacity:0;
    font-size:12px;
    transition: opacity .2s ease-in-out;
    text-align:left;
`;
export const InputField = styled.input`
    position: relative;
    background-color:transparent;
	display: block;
	padding: 0.8em;
    width: 100%;
    z-index:2;
	border: none;
	border-radius: 0;	
	color: #000;
	font-weight: 400;
    font-size:12px;  
    -webkit-appearance: none;
    padding: 0.5em 0;
    margin-bottom: 2em;
    &:focus{
        outline:none;
    }
    &:focus + ${InputLabel}:after{
        background: #ff935a;
	    -webkit-transform: scale3d(1, 0.25, 1);
	    transform: scale3d(1, 0.25, 1);
    }
    &:focus + ${InputLabel} ${InputLabelContent}{
        color: #ff935a;
	    -webkit-transform: translate3d(0, -1em, 0) scale3d(0.655, 0.655, 1);
	    transform: translate3d(0, -1em, 0) scale3d(0.655, 0.655, 1);
    }
    &:hover,&:focus {
        ~ ${InputAdvice}{
            opacity:1;
        } 
    }
    
`;

