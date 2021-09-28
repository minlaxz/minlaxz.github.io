import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '@/actions/pointActions';

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

    const points = useSelector(state => state.pointss);
    const user = useSelector(state => state.user);
    const authUser = useSelector(state => state.authUser);

    const count = useSelector(state => state.counter.value);

    return (
        <ReduxContainer>
            <div>
                <p>This is about <b>Redux</b> state management</p>
                <button onClick={() => dispatch(increment())}>+</button>
                &nbsp; {points.value} &nbsp;
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <p>About <b>Redux Toolkit</b></p>
                <button onClick={() => dispatch(increase())}>+</button>
                &nbsp; {count} &nbsp;
                <button onClick={() => dispatch(decrease())}>-</button>
            </div>
            <p>Total {points.value + count}</p>
            <div>
                {
                    user?.users[0]?.name ?? [].toString()
                }
            </div>
            <code style={{ fontSize: "11px" }}>
                {
                    authUser.userState.token
                        ? `Logged in`
                        : `Logged out`
                }
            </code>
        </ReduxContainer>
    )
}