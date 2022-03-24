import React from 'react';

import { Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { LifeEvent } from '../models/LifeEvent';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const List = () => {
    const dispatch = useDispatch();
    const { selectCurrent } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state.lifeEvents);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Stack spacing={2}>
                    {state.selectedLifeEvents.map((lifeEvent: LifeEvent, i: number) =>
                        <Item>
                            <div key={i} className={`selectable-event ${state.lookAt === lifeEvent && 'selected'}`} onClick={() => selectCurrent(lifeEvent)}>{lifeEvent.place}</div>
                        </Item>)}
                </Stack>
            </div>
        </>
    );
};

export default List;
