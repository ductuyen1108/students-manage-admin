import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getClassById } from '../service';

export const useGetClassById = (id: number) => {
  const { data: dataClass, isLoading: isLoadingClass } = useQuery(
    [QUERY_KEYS.GET_CLASS_BY_ID, id],
    () => getClassById(id)
  );
  return { dataClass, isLoadingClass };
};
