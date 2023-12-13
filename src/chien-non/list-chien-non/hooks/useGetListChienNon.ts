import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParams } from 'src/common/@types/common.interface'; 
import { getListChienNon } from 'src/chien-non/common/service'; 

export const useGetListChienNon = (params: IParams) => {
  const { data: dataChienNon, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_CHIEN_NON, params],
    () => getListChienNon(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataChienNon, isLoadingData };
};
