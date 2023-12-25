import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getLesionById } from '../service';

export const useGetLesionById = (id: number) => {
  const { data: dataLesion, isLoading: isLoadingLesion } = useQuery(
    [QUERY_KEYS.GET_LESSION_BY_ID, id],
    () => getLesionById(id)
  );
  return { dataLesion, isLoadingLesion };
};
