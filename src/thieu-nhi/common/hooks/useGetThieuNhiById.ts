import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { getThieuNhiById } from '../service';

export const useGetThieuNhiById = (id: number) => {
  const { data: detailsThieuNhi } = useQuery(
    [QUERY_KEYS.GET_THIEU_NHI_BY_ID, id],
    () => getThieuNhiById(id),
    {
      cacheTime: 0,
    }
  );
  return { detailsThieuNhi };
};
