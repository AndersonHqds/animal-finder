import React from 'react';
import style from "./Input.scss";

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
    const execBlur = evt => {
        if ('onBlur' in props)
            props.onBlur(evt.target.value);
    }

    return (
        <>
            <span className={style.inputHolder} aria-labelledby={`${props.label}-tip`}>

                <label className="label-margin" htmlFor={props.label}>
                    {props.label}
                </label>

                <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    {...pattern}
                    onBlur={evt => execBlur(evt)}
                    onChange={evt => props.setValue(evt)}
                    required={isRequired}
                    className={style.defaultInput}
                />

                <p className={style.inputAdvice} id={`${props.label}-tip`}>
                    {props.tip}
                </p>

            </span>
        </>
    );
};