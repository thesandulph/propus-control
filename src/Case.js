import PropTypes from 'prop-types';

const Case = ({children}) => children;

Case.propTypes = {
    case: PropTypes.any,
    condition: PropTypes.any,
    unless: PropTypes.bool,
    break: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Case.defaultProps = {
    case: null,
    condition: null,
    break: false,
    unless: false,
};

export default Case;
