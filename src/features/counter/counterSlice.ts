import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice: Slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state): void => {
      state.value += 1;
    },
    decrement: (state): void => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>): void => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;
