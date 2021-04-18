import {Children} from 'react';
import PropTypes from 'prop-types';
import {when} from './utils';
import Case from './case';

const Choose = ({children}) => {
    let iterative = true;
    return Children.map(children, ((child = {}) => {
        const {type, props} = child;
        if (iterative && type === Case) {
            if (when(props.condition, props.unless)) {
                iterative = false;
                return child
            }
        }
        return null;
    }));
};

Choose.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Choose;
