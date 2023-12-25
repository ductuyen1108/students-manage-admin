import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { IParamsLesion } from "../interface"
import { getListLesion } from "../service"

export const useGetListLesion = (params: IParamsLesion) => {
  const { data: listLesion, isLoading: isLoadingListLesion } = useQuery(
    [QUERY_KEYS.GET_LIST_LESSION, params],
    () => getListLesion(params)
  )
  return { listLesion, isLoadingListLesion }
}