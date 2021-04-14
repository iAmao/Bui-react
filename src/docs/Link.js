import React from 'react';
import PropTypes from 'prop-types';


const Link = ({...props}, context) => {
    return (
        <a onClick={() => context.location.push(props.href)}>
            {props.children}
        </a>
    )
};

Link.contextTypes = {
    location: PropTypes.shape({
        push: PropTypes.func,
        path: PropTypes.string,
    })    
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};



export default Link;