import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import data from '../../mock/data.json';

import { addPositions } from './position-slice';

export const useFetchPositions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch]);
};
