import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { INewsParams } from 'src/news/common/interface';
import { getListNews } from 'src/news/common/service';

export const useGetListNews = (params: INewsParams) => {
  const { data: dataNews, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_NEWS, params],
    () => getListNews(params),
    {
      /* cacheTime: 0, */
    }
  );
  return { dataNews, isLoadingData };
};
