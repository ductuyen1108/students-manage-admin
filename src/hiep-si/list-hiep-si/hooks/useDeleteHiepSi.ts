import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { deleteHiepSi } from 'src/hiep-si/common/service';
import { ICallback } from 'src/common/@types/common.interface';
import { IDeleteParams } from 'src/subject/common/interface';

export function useDeleteHiepSi(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteHiepSi(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_HIEP_SI])
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
