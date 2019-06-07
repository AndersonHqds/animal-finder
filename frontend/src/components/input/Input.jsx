import React from 'react';

export default props => {
    return (
        <>
            <span className="input-holder" aria-labelledby={`${props.name}-tip`}>
                <label className="label-margin" htmlFor={props.name}>
                    {props.name}
                </label>
                <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={evt => props.setValue(evt.target.value)}
                    required={props.isRequired}
                />

                {(props.value === "" && props.isRequired) && (
                    <p className="input-holder-advice" id={`${props.name}-tip`}>
                        {props.tip}
                    </p>
                )}
            </span>
        </>
    );
};