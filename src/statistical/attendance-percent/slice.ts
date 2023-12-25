import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { InitialNewsState, IParamsAttendancePercent } from './common/interface'
import { defaultValueFilter } from './common/constant'; 

const initialAttendancePercentState: InitialNewsState = {
  dataSearch: defaultValueFilter,
};

export const listAttendancePercentReducer = createSlice({
  name: 'listAttendancePercent',
  initialState: initialAttendancePercentState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IParamsAttendancePercent>) {
      state.dataSearch = action.payload;
    },
  },
});

export const { setDataFilter } = listAttendancePercentReducer.actions;

export const dataFilter = (state: RootState) => state.listAttendancePercent.dataSearch;

export default listAttendancePercentReducer.reducer;
