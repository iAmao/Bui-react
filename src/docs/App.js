import React from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';
import Component from './Component';
import Navigation from './Navigation';

import componentData from '../../config/componentData';


const PATH = window.location.pathname.substr(1)



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
            <div>
                <Navigation components={componentData.map((component) => component.name)} />
                <Component component={component}/>
            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.string
};

export default App;
