import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IChienNonFilter, InitialChienNonState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialChienNonState: InitialChienNonState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteChienNon: [],
  showPopup: false,
};

export const listChienNonReducer = createSlice({
  name: 'listChienNon',
  initialState: initialChienNonState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IChienNonFilter>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setIdDelete(state, action: PayloadAction<number[]>) {
      state.idDeleteChienNon = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setValue, setIdDelete, setPopup } = listChienNonReducer.actions;

export const dataFilter = (state: RootState) => state.listChienNon.dataSearch;
export const numberValue = (state: RootState) => state.listChienNon.value;
export const listIdDelete = (state: RootState) => state.listChienNon.idDeleteChienNon;
export const isPopup = (state: RootState) => state.listChienNon.showPopup;

export default listChienNonReducer.reducer;
