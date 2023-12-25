import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editClass } from '../service'; 
import { ICallback } from 'src/common/@types/common.interface';
import { IDataFormEditClass } from '../interface';

export const useEditClass = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation((data: { formData: IDataFormEditClass, id: number }) => editClass(data.formData, data.id), {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.GET_LIST_CLASS]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
