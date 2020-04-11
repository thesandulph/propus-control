import React from 'react';
import PropTypes from 'prop-types';
import {run} from '@propus/utility';
import {when} from './utility';

const When = ({condition, render, children, unless}) => {
    if (when(condition, unless)) {
        return children || run(render);
    }
    return null;
};

When.propTypes = {
    condition: PropTypes.any,
    unless: PropTypes.bool,
    render: PropTypes.func,
    children: PropTypes.node,
};

When.defaultProps = {
    condition: null,
    unless: false,
    render: null,
    children: null,
};

export default When;
