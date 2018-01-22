import React from 'react';
import PropTypes from 'prop-types';


const Navigation = ({ components, path }) => {

    return (
        <div>
            <div id="navigation-logo">
                <h4>bui React</h4>
            </div>
            <div id="navigation-items">
                <ul className="navigation">
                  <li className={`bui-react-docs-component-name ${path === '' ? 'active': ''}`}>
                    <a href="/">Getting started</a>
                  </li>
                    {components.map(name => (
                        <li
                          key={name}
                          className={
                            `bui-react-docs-component-name ${path === name.toLowerCase() ? 'active': ''}`
                          }>
                            <a href={`/${name.toLowerCase()}`}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

Navigation.propTypes = {
    path: PropTypes.string,
    components: PropTypes.array.isRequired
};

export default Navigation;
