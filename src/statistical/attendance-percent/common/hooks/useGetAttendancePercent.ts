import { useQuery } from "react-query"
import { IParamsAttendancePercent } from "../interface"
import { getAttendancePercent } from "../service"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"

export const useGetAttendancePercent = (params: IParamsAttendancePercent) => {
  const { data: dataAttendancePercent, isLoading } = useQuery(
    [QUERY_KEYS.GET_ATTENDANCE_PERCENT, params],
    () => getAttendancePercent(params)
  )

  return { dataAttendancePercent, isLoading }
}