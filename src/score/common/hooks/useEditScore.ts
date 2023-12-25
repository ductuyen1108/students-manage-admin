import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editScore } from '../service'; 
import { ICallback } from 'src/common/@types/common.interface';
import { IDataEditScore } from '../interface';

export const useEditScore = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation((data: { formData: IDataEditScore, id: number }) => editScore(data.formData, data.id), {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.GET_SCORE])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
