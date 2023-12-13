import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { ISubjectParams } from 'src/subject/common/interface';
import { getListSubject } from 'src/subject/common/service';

export const useGetListSubject = (params: ISubjectParams) => {
  const { data: dataNewsSubject, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_NEWS_SUBJECT, params],
    () => getListSubject(params),
    {}
  );
  return { dataNewsSubject, isLoadingData };
};
