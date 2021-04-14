import React from 'react';
import PropTypes from 'prop-types';

function getParams(activeRoute, path) {
    const splitRoute = activeRoute.split('/');
    const splitPath = path.split('/');
    const params = splitRoute.reduce((param, route, index) => {
        if (route.match(':')) {
            param[route.substr(1)] = splitPath[index];
        }
        return param;
    }, {});
    const trueRoute = splitRoute.reduce((newRoute, routeFrag) => {
        newRoute.push(params[routeFrag.substr(1)] || routeFrag)
        return newRoute;
    }, []).join('/');
    return { trueRoute, params };
}


class Routes extends React.Component {
    
    render () {
        const path = this.context.location.path;
        let routeParams;
        let fourOhFour;
        const activeRoute = this.props.routes(path).filter((route) => {
            if (route[0] === '*') {
                fourOhFour = route;
                return false;
            }
            const hasParams = route[0].match(':');
            if (hasParams) {
                const { trueRoute, params } = getParams(route[0], path);
                routeParams = params;
                return trueRoute === path;
            }
            return route[0] === path;
        });

        const props = JSON.parse(JSON.stringify(this.context));

        if (!activeRoute.length) {
            return fourOhFour[1](props);
        }

        props.location.params = activeRoute[0][0].match(':') ? routeParams : {};
        return activeRoute[0][1](props);
    }
}

Routes.contextTypes = {
    location: PropTypes.shape({
        path: PropTypes.string,
        push: PropTypes.func
    })
};

Routes.propTypes = {
    routes: PropTypes.func
};

export default Routes;
