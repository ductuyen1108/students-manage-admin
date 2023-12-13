import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParams } from 'src/common/@types/common.interface'; 
import { getListNghiaSi } from 'src/nghia-si/common/service'; 

export const useGetListNghiaSi = (params: IParams) => {
  const { data: dataNghiaSi, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_NGHIA_SI, params],
    () => getListNghiaSi(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataNghiaSi, isLoadingData };
};
