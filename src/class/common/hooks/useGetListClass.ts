import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { IParamsClass } from "../interface"
import { getListClass } from "../service"

export const useGetListClass = (params: IParamsClass) => {
  const { data: listClass, isLoading: isLoadingListClass } = useQuery(
    [QUERY_KEYS.GET_LIST_CLASS, params],
    () => getListClass(params)
  )
  return { listClass, isLoadingListClass }
}