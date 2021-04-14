import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const Navigation = ({ components, path: fullPath }) => {
    const path = fullPath.substr(1);

    return (
        <div>
            <div id="navigation-logo">
                <h4>bui React</h4>
            </div>
            <div id="navigation-items">
                <ul className="navigation">
                  <li className={`bui-react-docs-component-name ${path === '' ? 'active': ''}`}>
                    <Link href="/">Getting started</Link>
                  </li>
                  <li className={`bui-react-docs-component-name ${path === 'theming' ? 'active': ''}`}>
                    <Link href="/theming">Theming</Link>
                  </li>
                    {components.map(name => (
                        <li
                          key={name}
                          className={
                            `bui-react-docs-component-name ${path === name.toLowerCase() ? 'active': ''}`
                          }>
                            <Link href={`/${name.toLowerCase()}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

Navigation.propTypes = {
    location: PropTypes.shape({
        path: PropTypes.string
    }),
    components: PropTypes.array.isRequired
};

export default Navigation;
