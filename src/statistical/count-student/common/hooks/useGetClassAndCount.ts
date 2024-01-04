import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getClassAndCount } from '../service';
import { IParamsClassAndInfo } from '../interface';

export const useGetClassAndCount = (params: IParamsClassAndInfo) => {
  const { data: classAndCountData, isLoading: isLoadingClassAndCount } = useQuery(
    [QUERY_KEYS.GET_CLASS_AND_COUNT, params],
    () => getClassAndCount(params)
  );
  return { classAndCountData, isLoadingClassAndCount }
};
