import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IClassFilter, InitialClassState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialClassState: InitialClassState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteClass: [],
  showPopup: false,
};

export const listClassReducer = createSlice({
  name: 'listClass',
  initialState: initialClassState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IClassFilter>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setIdDelete(state, action: PayloadAction<number[]>) {
      state.idDeleteClass = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setValue, setIdDelete, setPopup } = listClassReducer.actions;

export const dataFilter = (state: RootState) => state.listClass.dataSearch;
export const numberValue = (state: RootState) => state.listClass.value;
export const listIdDelete = (state: RootState) => state.listClass.idDeleteClass;
export const isPopup = (state: RootState) => state.listClass.showPopup;

export default listClassReducer.reducer;
