import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


const Drawer = (props) => {
    return props.isOpen &&
        <div id="bui-react-sidebar-container">
            <div id="bui-react-sidebar" >
                {props.children} 
            </div>
        </div>
};

Drawer.defaultProps = {
    isOpen: false
};

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export { Drawer };
