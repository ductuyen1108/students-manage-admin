import { useInfiniteQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getListClass } from '../service/class.service';
import { IResponseListClass } from '../@types/common.interface';

const useGetListClass = (params: {page?: number, limit?: number}) => {
  const {
    data: dataClass,
    isLoading: isLoadingClass,
    fetchNextPage: fetchNextPageClass,
    hasNextPage: hasNextPageClass,
    isFetchingNextPage: isFetchingNextPageClass,
  } = useInfiniteQuery(
    [QUERY_KEYS.LIST_NEWS_ClASS, params],
    ({ pageParam = params.page }) => getListClass({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IResponseListClass) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 0,
    }
  );
  return {
    dataClass,
    isLoadingClass,
    fetchNextPageClass,
    hasNextPageClass,
    isFetchingNextPageClass,
  };
};

export default useGetListClass;