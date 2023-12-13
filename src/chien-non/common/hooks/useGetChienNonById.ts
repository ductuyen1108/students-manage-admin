import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { getChienNonById } from '../service';

export const useGetChienNonById = (id: number) => {
  const { data: detailsChienNon } = useQuery(
    [QUERY_KEYS.GET_CHIEN_NON_BY_ID, id],
    () => getChienNonById(id),
    {
      cacheTime: 0,
    }
  );
  return { detailsChienNon };
};
