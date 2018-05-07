import React from 'react';
import Links from './Links';
import API from '../Api';
import LinkStore from '../stores/LinkStore';
import {Event} from '../Constants';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.refreshLinks();
    }

    refreshLinks = () => {
        return { links: LinkStore.getAll() };
    }
    
    componentDidMount() {
        API.fetchLinks();
        LinkStore.on(Event, this.updateLinks);
    }

    componentWillUnmount() {
        LinkStore.removeListener(Event, this.updateLinks);
    }

    updateLinks = () => {
        this.setState(this.refreshLinks());
        console.log("4. In the view", this.state);
    }

    render() {
        return (
            <div>
                <h3>Links</h3>
                <ul>
                    {this.state.links.map(link => 
                        <li key={link._id}><a href="{link.url}">{link.title}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}
