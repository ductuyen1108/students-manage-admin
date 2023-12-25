import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/redux/store';
import { IScoreFilter, InitialScoreState } from '../common/interface';
import { defaultValueFilter } from '../common/constant';

const initialScoreState: InitialScoreState = {
  dataSearch: defaultValueFilter,
  value: 0,
  idDeleteScore: [],
  showPopup: false,
};

export const listScoreReducer = createSlice({
  name: 'listScore',
  initialState: initialScoreState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IScoreFilter>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setIdDelete(state, action: PayloadAction<number[]>) {
      state.idDeleteScore = action.payload;
    },
    setPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setDataFilter, setValue, setPopup, setIdDelete } = listScoreReducer.actions;

export const dataFilter = (state: RootState) => state.listScore.dataSearch;
export const numberValue = (state: RootState) => state.listScore.value;
export const isPopup = (state: RootState) => state.listScore.showPopup;
export const listIdDelete = (state: RootState) => state.listScore.idDeleteScore;

export default listScoreReducer.reducer;
