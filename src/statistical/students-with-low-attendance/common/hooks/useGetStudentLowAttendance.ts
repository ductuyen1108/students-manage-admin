import { useQuery } from "react-query"
import { IParamsStudentLowAttendance } from "../interface"
import { getStudentLowAttendance } from "../service"
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant"

export const usegetStudentLowAttendance = (params: IParamsStudentLowAttendance) => {
  const { data: dataAttendancePercent, isLoading } = useQuery(
    [QUERY_KEYS.GET_ATTENDANCE_PERCENT, params],
    () => getStudentLowAttendance(params)
  )

  return { dataAttendancePercent, isLoading }
}