import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IChienNonFilter, InitialChienNonState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialAuNhiState: InitialChienNonState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteChienNon: [],
  showPopup: false,
};

export const listAuNhiReducer = createSlice({
  name: 'listAuNhi',
  initialState: initialAuNhiState,
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

export const { setDataFilter, setValue, setIdDelete, setPopup } = listAuNhiReducer.actions;

export const dataFilter = (state: RootState) => state.listAuNhi.dataSearch;
export const numberValue = (state: RootState) => state.listAuNhi.value;
export const listIdDelete = (state: RootState) => state.listAuNhi.idDeleteChienNon;
export const isPopup = (state: RootState) => state.listAuNhi.showPopup;

export default listAuNhiReducer.reducer;
