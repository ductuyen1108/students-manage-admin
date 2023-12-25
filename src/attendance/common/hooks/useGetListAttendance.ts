import { useQuery } from "react-query"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"
import { IParamsAttendance } from "../interface"
import { getListAttendance } from "../service"

export const useGetListAttendance = (params: IParamsAttendance) => {
  const { data: listAttendance, isLoading: isLoadingListAttendance } = useQuery(
    [QUERY_KEYS.GET_ATTENDANCE, params],
    () => getListAttendance(params)
  )
  return { listAttendance, isLoadingListAttendance }
}