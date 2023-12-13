import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParams } from 'src/common/@types/common.interface'; 
import { getListHiepSi } from 'src/hiep-si/common/service'; 

export const useGetListHiepSi = (params: IParams) => {
  const { data: dataHiepSi, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_HIEP_SI, params],
    () => getListHiepSi(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataHiepSi, isLoadingData };
};
