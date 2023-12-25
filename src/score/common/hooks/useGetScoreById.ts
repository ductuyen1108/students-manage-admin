import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { getScoreById } from "../service"

export const useGetScoreById = (id: number) => {
  const { data: scoreById, isLoading: isLoadingScoreById } = useQuery(
    [QUERY_KEYS.GET_SCORE, id],
    () => getScoreById(id)
  )
  return { scoreById, isLoadingScoreById }
}