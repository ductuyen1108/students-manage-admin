import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { ILesionFilter, InitialLesionState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialLesionState: InitialLesionState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteLesion: [],
  showPopup: false,
};

export const listLesionReducer = createSlice({
  name: 'listLesion',
  initialState: initialLesionState,
  reducers: {
    setDataFilter(state, action: PayloadAction<ILesionFilter>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setIdDelete(state, action: PayloadAction<number[]>) {
      state.idDeleteLesion = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setValue, setIdDelete, setPopup } = listLesionReducer.actions;

export const dataFilter = (state: RootState) => state.listLesion.dataSearch;
export const numberValue = (state: RootState) => state.listLesion.value;
export const listIdDelete = (state: RootState) => state.listLesion.idDeleteLesion;
export const isPopup = (state: RootState) => state.listLesion.showPopup;

export default listLesionReducer.reducer;
