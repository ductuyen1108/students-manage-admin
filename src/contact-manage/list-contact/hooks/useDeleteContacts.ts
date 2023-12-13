import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { ICallBackQuery } from 'src/common/constants/common.interfaces';
import { IDeleteParams } from 'src/contact-manage/common/interface';
import { deleteContacts } from 'src/contact-manage/common/service';

export function useDeleteContacts(callback: ICallBackQuery) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteContacts(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_CONTACT])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
    retry: 2,
  });
}
