import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IContactFilter } from '../common/interface';

type InitialState = {
  dataFilter: IContactFilter;
  idsDelete: number[];
  showPopup: boolean;
};

const initialNewsState: InitialState = {
  dataFilter: {
    name: undefined,
    phoneNumber: undefined,
    email: undefined,
    company: undefined,
    fromDate: null,
    toDate: null,
  },
  idsDelete: [],
  showPopup: false,
};

export const listContactSlice = createSlice({
  name: 'listContact',
  initialState: initialNewsState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IContactFilter>) {
      state.dataFilter = action.payload;
    },
    setIdsDelete(state, action: PayloadAction<number[]>) {
      state.idsDelete = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setIdsDelete, setPopup } = listContactSlice.actions;

export default listContactSlice.reducer;
