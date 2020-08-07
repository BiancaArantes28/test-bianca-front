import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { getHelloWorld } from '../../store/selectors/helloworld/helloWorldSelectors';
import { fetchHelloWorld } from '../../store/actions/helloworld/helloWorldActions';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchHelloWorld("Hello World");
    }

    render() {
        const { helloWorld } = this.props;

        return (
            <HomePage helloWorld={helloWorld} />
        );
    }
}

const mapStateToProps = (state) => ({
    helloWorld: getHelloWorld(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHelloWorld: (payload) => dispatch(fetchHelloWorld(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
