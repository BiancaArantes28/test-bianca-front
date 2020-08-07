import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { getHelloWorld } from '../../store/selectors/helloworld/helloWorldSelectors';
import { getNames, getListStatus, getSelected } from '../../store/selectors/list/listSelectors';
import { fetchHelloWorld } from '../../store/actions/helloworld/helloWorldActions';
import { fetchList, selectItem, unSelectItem } from '../../store/actions/list/listActions';
import { STATUS } from '../../const/status';


class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchHelloWorld("Hello World");

        if(this.props.listStatus !== STATUS.FETCHED) {
            this.props.fetchList();
        }
    }

    render() {
        const { helloWorld, names, selecteds } = this.props;

        return (
            <HomePage helloWorld={helloWorld} selecteds={selecteds} names={names} selectItem={this.props.selectItem} unSelectItem={this.props.unSelectItem} />
        );
    }
}

const mapStateToProps = (state) => ({
    helloWorld: getHelloWorld(state),
    names: getNames(state),
    listStatus: getListStatus(state),
    selecteds: getSelected(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHelloWorld: (payload) => dispatch(fetchHelloWorld(payload)),
        fetchList: () => dispatch(fetchList()),
        selectItem: (item) => dispatch(selectItem(item)),
        unSelectItem: (item) => dispatch(unSelectItem(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
