import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { getCountStudent } from "../service"

export const useGetCountStudent = () => {
  const { data: countStudentData, isLoading } = useQuery(
    [QUERY_KEYS.GET_COUNT_STUDENT],
    () => getCountStudent()
  )
  return { countStudentData, isLoading }
}