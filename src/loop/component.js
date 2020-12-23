import {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import {toObject, toArray} from '@propus/utility';
import {keyExtractor as extractor} from './utility';

const Loop = ({data, keyExtractor, children}) => {
    const object = toObject(data);
    if (children) {
        return Object.keys(object).map((value, index) => {
            const item = object[value];
            const extracted = keyExtractor(item, value, index);
            return cloneElement(Children.only(children), {
                ...children.props,
                index,
                item,
                subject: value,
                key: extractor(toArray(extracted)),
            })
        });
    }
    return null;
};

Loop.propTypes = {
    children: PropTypes.node,
    keyExtractor: PropTypes.func.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
};

Loop.defaultProps = {
    children: null,
};

export default Loop;
