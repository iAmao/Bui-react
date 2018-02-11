import React from 'react';
import PropTypes from 'prop-types';


const Back = ({...props}, context) => {
    return (
        <a onClick={() => context.location.back()}>
            {props.children}
        </a>
    )
};

Back.contextTypes = {
    location: PropTypes.shape({
        back: PropTypes.func
    })    
};

Back.propTypes = {
    children: PropTypes.node.isRequired
};



export default Back;