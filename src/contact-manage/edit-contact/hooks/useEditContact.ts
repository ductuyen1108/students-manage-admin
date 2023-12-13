import { useMutation } from 'react-query';
import { ICallBackQuery } from 'src/common/constants/common.interfaces';
import { editContact } from 'src/contact-manage/common/service';

export const useEditContact = (callback: ICallBackQuery) => {
  return useMutation(editContact, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
