import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ component }) => {
    return (
        <ul className="navigation">
            {component.map(name => (
                <li key={name}>
                    <a href={`#${name}`}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

Navigation.propTypes = {
    component: PropTypes.array.isRequired
}

export default Navigation;
