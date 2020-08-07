import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        const { helloWorld, names } = this.props;
        return (
            <div>
                <h1>{helloWorld}</h1>
                {
                    names.map((name) => {
                       return (<p>{name.name}</p>)
                    })
                }
            </div>
        );
    }
}

export default HomePage;
