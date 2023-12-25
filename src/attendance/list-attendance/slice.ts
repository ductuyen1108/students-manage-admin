import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IAttendanceFilter, InitialAttendanceState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialAttendanceState: InitialAttendanceState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteAttendance: {
    lessonId: 0,
    studentIds: []
  },
  showPopup: false,
};

export const listAttendanceReducer = createSlice({
  name: 'listAttendance',
  initialState: initialAttendanceState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IAttendanceFilter>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setIdDelete(state, action: PayloadAction<number[]>) {
      state.idDeleteAttendance.studentIds = action.payload;
    },
    setIdLesson(state, action: PayloadAction<number>) {
      state.idDeleteAttendance.lessonId = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setValue, setIdDelete, setPopup, setIdLesson } = listAttendanceReducer.actions;

export const dataFilter = (state: RootState) => state.listAttendance.dataSearch;
export const numberValue = (state: RootState) => state.listAttendance.value;
export const listIdDelete = (state: RootState) => state.listAttendance.idDeleteAttendance.studentIds;
export const isPopup = (state: RootState) => state.listAttendance.showPopup;
export const idLesson = (state: RootState) => state.listAttendance.idDeleteAttendance.lessonId;

export default listAttendanceReducer.reducer;
