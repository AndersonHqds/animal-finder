import * as React from 'react';
import { DefaultBtn } from './Button.js';

export default props => {
    return (
        <DefaultBtn type={props.type} className={`${props.classes || ""}`}>{props.value}</DefaultBtn>
    );
};
