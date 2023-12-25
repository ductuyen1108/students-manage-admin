import { useMutation, useQueryClient } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createAttendance } from '../service'; 
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';

export const useCreateAttendance = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(createAttendance, {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.GET_ATTENDANCE])
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
}