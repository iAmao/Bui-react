import React from 'react';
import PropTypes from 'prop-types';


class BuiTheme extends React.Component {

    getChildContext() {
        let yaml = {}
        if (!this.props.theme) {
            yaml = require('../assets/themes/default.theme.yml').json;
        } else {
            yaml = this.props.theme;
        }
        const { name, colors, ...buiThemes } = yaml;
        return {
            bui:
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

BuiTheme.propTypes = {
    theme: PropTypes.shape({
        name: PropTypes.string,
        colors: PropTypes.shape({
            primary: PropTypes.string,
            secondary: PropTypes.string
        }),
        button: PropTypes.object
    }),
    children: PropTypes.node
};

export default BuiTheme;
