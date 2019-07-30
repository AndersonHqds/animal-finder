import React, { useState, useEffect } from 'react';
import { InputHolder, InputField, InputLabel, InputLabelContent,InputAdvice } from './Input';


const getPattern = rule => {
    switch (rule) {
        case "notSpecialCharacter":
            return '[a-z A-Z]';
        case "numberOnly":
            return '[0-9]+';
        default:
            return '[a-z A-Z\d]+';
    }
}


export default props => {
    
    const isRequired = props.isRequired || false;
    const pattern = 'pattern' in props ? { pattern: getPattern(props.pattern) } : {};
    const [isFilled, setisFilled] = useState(false);
    const execBlur = evt => {
        if ('onBlur' in props)
            props.onBlur(evt.target.value);
    }
    
    const changeValue = evt => {        
        if(evt.target.value.length > 0 && isFilled == false){
            setisFilled(true);
        }else{
            setisFilled(false);
        }
        props.setValue(evt);       
    }
    return (
        <>
            <InputHolder aria-labelledby={`${props.label}-tip`}    className={isFilled && "inputFilled"} >

                <InputField
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    {...pattern}
                    onBlur={evt => execBlur(evt)}
                    onChange={evt => changeValue(evt)}
                    required={isRequired}  
                                  
                />
                <InputLabel htmlFor={props.label}>
                  <InputLabelContent>{props.label}</InputLabelContent>
                </InputLabel>
                <InputAdvice id={`${props.label}-tip`}>
                    {props.tip}
                </InputAdvice>

            </InputHolder>
        </>
    );
};
