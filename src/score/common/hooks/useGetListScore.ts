import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { IParamsScore } from "../interface"
import { getListScore } from "../service"

export const useGetListScore = (params: IParamsScore) => {
  const { data: listScore, isLoading: isLoadingListScore } = useQuery(
    [QUERY_KEYS.GET_SCORE, params],
    () => getListScore(params)
  )
  return { listScore, isLoadingListScore }
}