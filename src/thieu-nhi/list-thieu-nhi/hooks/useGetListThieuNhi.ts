import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParams } from 'src/common/@types/common.interface'; 
import { getListThieuNhi } from 'src/thieu-nhi/common/service'; 

export const useGetListThieuNhi = (params: IParams) => {
  const { data: dataThieuNhi, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_THIEU_NHI, params],
    () => getListThieuNhi(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataThieuNhi, isLoadingData };
};
