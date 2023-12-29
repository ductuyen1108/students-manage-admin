import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { InitialNewsState, IParamsStudentLowAttendance } from './common/interface'
import { defaultValueFilter } from './common/constant'; 

const initialStudentLowAttendanceState: InitialNewsState = {
  dataSearch: defaultValueFilter,
};

export const listStudentLowAttendanceReducer = createSlice({
  name: 'listStudentLowAttendance',
  initialState: initialStudentLowAttendanceState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IParamsStudentLowAttendance>) {
      state.dataSearch = action.payload;
    },
  },
});

export const { setDataFilter } = listStudentLowAttendanceReducer.actions;

export const dataFilter = (state: RootState) => state.listStudentLowAttendance.dataSearch;

export default listStudentLowAttendanceReducer.reducer;
