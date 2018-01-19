import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
    return (
        <ul className="navigation">
            {components.map(name => (
                <li key={name} className="bui-react-docs-component-name">
                    <a href={`#${name}`}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

Navigation.propTypes = {
    components: PropTypes.array.isRequired
}

export default Navigation;
