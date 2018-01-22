import React from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';
import Component from './Component';
import Navigation from './Navigation';

import componentData from '../../config/componentData';


const PATH = window.location.pathname.substr(1);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { route: props.location || PATH };
    }

    render() {
        const { route } = this.state;

        const componentMap = componentData.reduce((a, component) => {
            a[component.name.toLowerCase()] = component;
            return a;
        }, {});

        const component = route ?
            componentMap[route.toLowerCase()]
            :
            componentMap[componentData[0].name.toLowerCase()];
        
        if (!component) {
            return <NotFound />;
        }

        return (
            <div className="row">
                <div className="col-md-2" id="navigation-container">
                    <Navigation
                      path={PATH.toLowerCase()}
                      components={componentData.map((component) => component.name)}
                    />
                </div>
                <div className="col-md-8" id="details-container">
                    <Component component={component}/>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.string
};

export default App;
