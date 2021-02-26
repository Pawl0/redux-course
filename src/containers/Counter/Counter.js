import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {

    return <div>
        <h1>Current State: {props.ctr}</h1>
        <button onClick={props.onIncrementCounter}>Increment State</button>
    </div>
};

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);