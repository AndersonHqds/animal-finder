import React from 'react';
import style from "./Input.scss";

export default props => {
    return (
        <>
            <span className={style.inputHolder} aria-labelledby={`${props.name}-tip`}>

                <label className="label-margin" htmlFor={props.name}>
                    {props.name}
                </label>

                <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={evt => props.setValue(evt.target.value)}
                    required={props.isRequired}
                    className={style.defaultInput}
                />

                {props.isRequired && (
                    <p className={style.inputAdvice} id={`${props.name}-tip`}>
                        {props.tip}
                    </p>
                )}

            </span>
        </>
    );
};