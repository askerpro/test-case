import { RootState } from 'store/root-reducer';

export const getItems = (state: RootState) => state.items.items;

export const isPending = (state: RootState) => state.items.pending;