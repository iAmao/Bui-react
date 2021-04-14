import React from 'react';
import PropTypes from 'prop-types';


class Router extends React.Component {
    state = {
        location: {
            path: window.location.pathname,
        }
    };

    componentDidMount() {
        window.onpopstate = this.popState;
    }

    componentWillUnmount() {
        window.onpopstate = null;
    }

    popState = (event) => {
        this.setState({ location: { path: window.location.pathname } });
    }

    push = (path) => {
        this.setState({ location: { path } });
        window.history.pushState(window.history.state, '', path);
    }

    back = () => {
        window.history.back();
    }

    getChildContext() {
        return {
            location: {
                path: this.state.location.path,
                push: this.push,
                back: this.back
            }
        };
    }

    render() {
        return this.props.render({
            path: this.state.location.path,
            push: this.push,
            back: this.back
        });
    }
}

Router.childContextTypes = {
    location: PropTypes.shape({
        path: PropTypes.string,
        push: PropTypes.func,
        back: PropTypes.func
    })
};

Router.propTypes = {
    render: PropTypes.func.isRequired
}

export default Router;
