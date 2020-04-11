ToDo List:
-- add browser os and etc... to agent for condition
1. integrate locales provide and static meta tags with meta and global meta
2. complete locale provider
3. add context to link component to manage routes manifest
4. refactor page component
5. implement redirector component
6. implement error-boundary component
7. implement react-redux helper component

*. implement avatar and no-image and vector components

## Cross platform between native and web
agent, container, flex, image

```
import { connect as reduxConnect } from 'react-redux';
// import store from '../../../store';
const store = {};

const connect = (mapStateToProps, mapDispatchToProps) => {
    let newMapDispatchToProps = null;
    if (typeof mapDispatchToProps === 'function') {
        const props = mapDispatchToProps(store.actions);
        newMapDispatchToProps = dispatch => Object.keys(props).reduce((accumulator, key) => ({
            ...accumulator,
            [key]: payload => dispatch(props[key](payload)),
        }), {});
    }
    return reduxConnect(mapStateToProps, newMapDispatchToProps);
};

export default connect;

--------------------------------------------

const stacks = [

    {
        key: 'global',
        layout: Fragment,
        props: {},
        routes: [
            {
                key: 'home',
                path: '/',
                exact: true,
                props: {},
            }
        ]
    }
];

```
