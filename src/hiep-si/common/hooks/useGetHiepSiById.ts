import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { getHiepSiById } from '../service';

export const useGetHiepSiById = (id: number) => {
  const { data: detailsHiepSi } = useQuery(
    [QUERY_KEYS.GET_AU_NHI_BY_ID, id],
    () => getHiepSiById(id),
    {
      cacheTime: 0,
    }
  );
  return { detailsHiepSi };
};
