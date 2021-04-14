import React from 'react';
import PropTypes from 'prop-types';

import Routes from './Routes';
import Router from './Router';
import NotFound from './NotFound';
import Component from './Component';
import GetStarted from './GetStarted';
import Navigation from './Navigation';

import componentData from '../../config/componentData';

import BuiTheme from '../components/BuiTheme'


const PATH = window.location.pathname.substr(1);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { route: props.location || PATH };
    }

    render() {
        const componentMap = componentData.reduce((a, component) => {
            a[component.name.toLowerCase()] = component;
            return a;
        }, {});

        return (
            <Router render={(location) => {
                return (
                    <div className="row">
                        <div className="col-md-2" id="navigation-container">
                            <Navigation
                                path={location.path}
                                components={componentData.map((component) => component.name)}
                            />
                        </div>
                        <div className="col-md-8" id="details-container">
                            <BuiTheme>
                                <Routes
                                    routes={(location) => {
                                        return [
                                            ['/', GetStarted],
                                            ['/theming', () => <div><h2>Theming</h2></div>],
                                            ['/:id', (props) => {
                                                const component = componentMap[props.location.params.id];
                                                return component ?
                                                    <Component component={componentMap[props.location.params.id]} />
                                                    :
                                                    <NotFound />
                                            }],
                                            ['*', NotFound]
                                        ]
                                    }}
                                />
                            </BuiTheme>
                        </div>
                    </div>
                );
            }} />
        )
    }
}

App.propTypes = {
    location: PropTypes.string
};

export default App;
