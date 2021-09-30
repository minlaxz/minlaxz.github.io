import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '@/Reducers/counterSlice';

export const ReduxContainer = styled.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;

export default () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);

    return (
        <ReduxContainer>
            <div>
                <p>State : <b>Redux Toolkit</b></p>
                <button onClick={() => dispatch(increase())}>+</button>
                &nbsp; {count} &nbsp;
                <button onClick={() => dispatch(decrease())}>-</button>
            </div>
        </ReduxContainer>
    )
}