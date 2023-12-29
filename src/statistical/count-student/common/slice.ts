import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store'; 
import { InitialStatisticalState, IParamsClassAndInfo } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialStatisticalState: InitialStatisticalState = {
  dataSearch: defaultValueFilter,
};

export const listStatisticalReducer = createSlice({
  name: 'listStatistical',
  initialState: initialStatisticalState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IParamsClassAndInfo>) {
      state.dataSearch = action.payload;
    },
  },
});

export const { setDataFilter } = listStatisticalReducer.actions;

export const dataFilter = (state: RootState) => state.listStatistical.dataSearch;

export default listStatisticalReducer.reducer;
