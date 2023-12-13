import { useInfiniteQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getNewsSubject } from '../service';
import { ISubjectList, ISubjectParams } from 'src/subject/common/interface';

export const useGetSubject = (params: ISubjectParams) => {
  const {
    data: dataSubject,
    isLoading: isLoadingSubject,
    fetchNextPage: fetchNextPageSubject,
    hasNextPage: hasNextPageSubject,
    isFetchingNextPage: isFetchingNextPageSubject,
  } = useInfiniteQuery(
    [QUERY_KEYS.LIST_NEWS_SUBJECT, params],
    ({ pageParam = params.page }) => getNewsSubject({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: ISubjectList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 0,
    }
  );
  return {
    dataSubject,
    isLoadingSubject,
    fetchNextPageSubject,
    hasNextPageSubject,
    isFetchingNextPageSubject,
  };
};
