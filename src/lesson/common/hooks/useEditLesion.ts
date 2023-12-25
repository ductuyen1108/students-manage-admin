import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editLesion } from '../service'; 
import { ICallback } from 'src/common/@types/common.interface';
import { IDataFormEditLesion } from '../interface';

export const useEditLesion = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation((data: { formData: IDataFormEditLesion, id: number }) => editLesion(data.formData, data.id), {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.GET_LIST_LESSION]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
