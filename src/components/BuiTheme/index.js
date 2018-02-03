import React from 'react';
import PropTypes from 'prop-types';

import theme from '../assets/themes/default.json';


class BuiTheme extends React.Component {

    getChildContext() {
        const { name, colors, ...buiThemes } = theme;
        return { bui:
            {
                theme: buiThemes
            }
        };
    }

    render() {
        return this.props.children;
    }
}

BuiTheme.childContextTypes = {
    bui: PropTypes.shape({
        theme: PropTypes.shape({
            button: PropTypes.object
        }) 
    }),
    colors: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string
    }),
    button: PropTypes.shape({
        base: PropTypes.object
    })
};

export default BuiTheme;
