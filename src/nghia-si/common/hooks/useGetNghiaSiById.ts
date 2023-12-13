import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { getNghiaSiById } from '../service';

export const useGetNghiaSiById = (id: number) => {
  const { data: detailsNghiaSi } = useQuery(
    [QUERY_KEYS.GET_NGHIA_SI_BY_ID, id],
    () => getNghiaSiById(id),
    {
      cacheTime: 0,
    }
  );
  return { detailsNghiaSi };
};
