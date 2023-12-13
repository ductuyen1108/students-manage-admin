import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { dispatch } from 'src/common/redux/store';
import { setAccessToken, setLogin, setRefreshToken } from '../auth.slice';
import { ILoginCallback } from '../interface';
import { getAuth } from '../service';

export const useAuthlogin = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(getAuth, {
      onSuccess: (data) => {
        if (!data) return;
        const { accessToken, refreshToken } = data;
        dispatch(setAccessToken('Bearer ' + accessToken));
        dispatch(setRefreshToken(refreshToken));
        // dispatch(setLogin(true));
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    }),
  };
};
