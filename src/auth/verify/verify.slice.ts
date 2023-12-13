import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IVerifyEmail, StatusVerifyEmail } from './interfaces';

const VerifyEmailSlice: IVerifyEmail = {
  statusVerifyEmail: StatusVerifyEmail.NONE,
};
export const verifyEmailSlice = createSlice({
  name: 'verifyEmail',
  initialState: VerifyEmailSlice,
  reducers: {
    setStatusVerifyEmail: (state, action: PayloadAction<StatusVerifyEmail>) => {
      state.statusVerifyEmail = action.payload;
    },
  },
});

export const { setStatusVerifyEmail } = verifyEmailSlice.actions;
export const statusVerifyEmailSelector = (state: RootState) =>
  state.verifyEmail.statusVerifyEmail;

export default verifyEmailSlice.reducer;
