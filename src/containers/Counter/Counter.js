import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const Counter = (props) => {
    const [value, setValue] = useState(0);
    return <div>
        <h1>Current State: {props.ctr}</h1>
        <input type="number" value={value} onChange={(ev) => setValue(ev.target.value)}/>
        <button onClick={props.onIncrementCounter}>Increment State</button>
        <button onClick={props.onDecrementCounter}>Decrement State</button>
        <button onClick={() => props.onAddCounter(value)}>Add State</button>
        <button onClick={() => props.onSubtractCounter(value)}>Subtract State</button>
        <hr />
        <button onClick={props.onStoreResult}>Store Result</button>
        <ul>
            {props.results.map((result)=> (
                <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>
            ))}
        </ul>
    </div>
};

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        results: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: (value) => dispatch({type: actionTypes.ADD, value}),
        onSubtractCounter: (value) => dispatch({type: actionTypes.SUBTRACT, value}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);