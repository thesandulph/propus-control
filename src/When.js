import PropTypes from 'prop-types';
import {when} from './utils';

const When = ({condition, children, unless}) => {
    if (when(condition, unless)) {
        return children;
    }
    return null;
};

When.propTypes = {
    condition: PropTypes.any,
    unless: PropTypes.bool,
    children: PropTypes.node,
};

When.defaultProps = {
    condition: null,
    unless: false,
    children: null,
};

export default When;
