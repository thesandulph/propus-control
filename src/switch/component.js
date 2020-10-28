import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {Case} from '../case';
import {when} from '../when/utility';

const Switch = ({value, children}) => {
    let iterative = true;
    return Children.map(children, ((child = {}) => {
        const {type, props} = child;
        if (iterative && type === Case) {
            if (when(value === props.case)) {
                iterative = !props.break;
                return child;
            }
        }
        return null;
    }));
};

Switch.propTypes = {
    switch: PropTypes.any,
    children: PropTypes.node.isRequired,
};

Switch.defaultProps = {
    switch: undefined,
};

export default Switch;
