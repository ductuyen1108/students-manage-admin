import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getContactById } from '../service'; 

export const useGetContactById = (id: number) => {
  const { data: dataContactById, isLoading } = useQuery(
    [QUERY_KEYS.CONTACT_BY_ID, id],
    () => getContactById(id),
    {
      cacheTime: 0,
    }
  );
  return { dataContactById, isLoading };
};
