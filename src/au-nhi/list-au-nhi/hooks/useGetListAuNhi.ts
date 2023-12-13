import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParams } from 'src/common/@types/common.interface'; 
import { getListAuNhi } from 'src/au-nhi/common/service'; 

export const useGetListAuNhi = (params: IParams) => {
  const { data: dataAuNhi, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_AU_NHI, params],
    () => getListAuNhi(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataAuNhi, isLoadingData };
};
