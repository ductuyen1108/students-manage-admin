import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { getAuNhiById } from '../service';

export const useGetAuNhiById = (id: number) => {
  const { data: detailsChienNon } = useQuery(
    [QUERY_KEYS.GET_AU_NHI_BY_ID, id],
    () => getAuNhiById(id),
    {
      cacheTime: 0,
    }
  );
  return { detailsChienNon };
};
