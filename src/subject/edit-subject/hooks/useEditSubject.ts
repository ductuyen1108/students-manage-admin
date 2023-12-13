import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editSubject } from 'src/subject/common/service';
import { ICallback } from 'src/subject/common/interface';

export const useEditSubject = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editSubject, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.LIST_NEWS_SUBJECT]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
