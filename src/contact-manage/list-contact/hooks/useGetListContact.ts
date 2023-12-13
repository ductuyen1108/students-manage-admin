import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { IParamsListContact } from 'src/contact-manage/common/interface';
import { getListContact } from 'src/contact-manage/common/service';

export const useGetListContact = (params: IParamsListContact) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.LIST_CONTACT, params],
    () => getListContact(params),
    {
      cacheTime: 0,
    }
  );
  return { data, isLoading };
};
