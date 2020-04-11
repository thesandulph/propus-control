import React from 'react';
import PropTypes from 'prop-types';
import {
    isArray,
    isObject,
    isValued,
    run,
} from '@propus/utility';
import {keyExtractor} from './utility';

const Loop = ({label, data, component: Component, wrapper: Wrapper}) => {
    if (isValued(label)) {
        const is_array_data = isArray(data);
        const is_object_data = isObject(data);
        if (is_array_data || is_object_data) {
            const iterative_data = is_array_data ? data : Object.keys(data);
            return iterative_data.map((key, index) => {
                const subject = is_array_data ? index : key;
                const item = is_array_data ? key : data[key];
                return (
                    <Component
                        index={index}
                        subject={subject}
                        item={item}
                        key={keyExtractor(subject, index, run(label, item))}
                    />
                );
            });
        }
    }
    return null;
};

Loop.propTypes = {
    label: PropTypes.any.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    component: PropTypes.func.isRequired,
};

Loop.defaultProps = {
    keyExtractor: () => null,
};

export default Loop;
