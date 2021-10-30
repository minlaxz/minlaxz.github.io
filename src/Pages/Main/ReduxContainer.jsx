import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '@/Reducers/counterSlice';
import { toast } from 'react-toastify';

const ReduxContainer = styled.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;

export default () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    const toastEnabled = useSelector(state => state.toast.toastEnabled);

    return (
        <ReduxContainer>
            <div>
                <p>State Management: <b>Redux Toolkit</b></p>
                <button
                    onClick={() => {
                        dispatch(increase())
                        toastEnabled && toast.success('dipatched increase')
                    }}
                > + </button>
                &nbsp; {count} &nbsp;
                <button
                    onClick={() => {
                        dispatch(decrease())
                        toastEnabled && toast.warn('dipatched decrease')
                    }}
                > - </button>
            </div>
        </ReduxContainer>
    )
}