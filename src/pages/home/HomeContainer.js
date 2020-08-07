import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { getHelloWorld } from '../../store/selectors/helloworld/helloWorldSelectors';
import { getNames, getListStatus } from '../../store/selectors/list/listSelectors';
import { fetchHelloWorld } from '../../store/actions/helloworld/helloWorldActions';
import { fetchList } from '../../store/actions/list/listActions';
import { STATUS } from '../../const/status';


class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchHelloWorld("Hello World");

        if(this.props.listStatus !== STATUS.FETCHED) {
            this.props.fetchList();
        }
    }

    render() {
        const { helloWorld, names } = this.props;

        return (
            <HomePage helloWorld={helloWorld} names={names} />
        );
    }
}

const mapStateToProps = (state) => ({
    helloWorld: getHelloWorld(state),
    names: getNames(state),
    listStatus: getListStatus(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHelloWorld: (payload) => dispatch(fetchHelloWorld(payload)),
        fetchList: () => dispatch(fetchList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
