import React from 'react';

import ComponentPage from './ComponentPage';

import componentData from '../../config/componentData';


const HASH = window.location.hash.substr(1)



export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { route: HASH }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({ route: HASH });
        });
    }

    render() {
        const { route } = this.state;
        const component = route ?
            componentData.filter((component) => component.name.toLowerCase() === route.toLowerCase())[0]
            :
            componentData[0]

        return (
            <div>
                <ComponentPage component={component}/>
            </div>
        )
    }
}
