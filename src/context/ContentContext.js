import React, { Component, createContext } from 'react';
import { getData } from '../functions/helpers';
import defaultSettings from '../resources/json/default-settings.json';

const ContentContext = createContext({
    loaded: false, error: false,
});

export class ContentProvider extends Component {
    updateContent = newContent => {
        this.setState(newContent);
    };

    state = {};

    fetchData = url => {
        getData(url).then(result => {
            if (result.code || result.general.domain === null) {
                this.setState({
                    error: {
                        isError: true, message: 'Network error',
                    },
                });
            } else {
                this.updateContent(result);
            }
        }, error => {
            this.setState({
                error: {
                    isError: true, message: error,
                },
            });
        });
    };

    componentDidMount() {
        if (process.env.NODE_ENV === 'production') {
            getData('/api.json').then(result => {
                this.fetchData(result.apiUrl);
            });
        } else {
            this.fetchData(defaultSettings.apiUrl);
        }
    }

    render() {
        return <ContentContext.Provider value={this.state}>{this.props.children}</ContentContext.Provider>;
    }
}

export const ContentConsumer = ContentContext.Consumer;
