import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {When, when} from '../when';

const Choose = ({switch: switch_prop, children}) => {
    let iterative = true;
    const results = [];
    if (typeof switch_prop === 'undefined') {
        Children.forEach(children, (child) => {
            if (iterative && React.isValidElement(child) && child.type === When) {
                if (when(child.props.condition, child.props.unless)) {
                    results.push(child);
                    iterative = false;
                }
            }
        });
    } else {
        Children.forEach(children, (child) => {
            if (iterative && React.isValidElement(child) && child.type === When) {
                if (when(switch_prop === child.props.case, child.props.unless)) {
                    results.push(React.cloneElement(child, {condition: switch_prop === child.props.case}));
                    iterative = !child.props.break;
                }
            }
        });
    }
    if (results.length) {
        return results;
    }
    return null
};

Choose.propTypes = {
    switch: PropTypes.any,
    children: PropTypes.node.isRequired,
};

Choose.defaultProps = {
    switch: undefined,
};

export default Choose;
