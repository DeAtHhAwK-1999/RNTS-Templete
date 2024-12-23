import {useSelector} from 'react-redux';
import {RootState} from '@Types/rootState';

// Use throughout your app instead of plain `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
