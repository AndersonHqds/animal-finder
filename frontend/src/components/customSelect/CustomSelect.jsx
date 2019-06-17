import * as React from 'react';

export default props => {
    const options = props.options || [];
    const label = props.label || 'Selecione';
    return (

        <span>
            <label className="label-margin">
                {label}
            </label>

            <select onChange={evt => props.setSelectedState(evt.target.value)} value={props.selected}>
                {props.options.map((state, idx) => (
                    <option key={idx} value={state.value}>
                        {state.name}
                    </option>
                ))}
            </select>
        </span>
    );
};