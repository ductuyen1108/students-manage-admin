import { Typography } from "@mui/material";

interface Props {
  isAttended: boolean;
}

const AttendanceStatus = ({ isAttended }: Props) => {
  const statusText = isAttended ? 'ĐÃ ĐIỂM DANH' : 'CHƯA ĐIỂM DANH';
  const statusColor = isAttended ? 'green' : 'red';

  return (
    <Typography sx={{ color: statusColor, textTransform: 'uppercase', fontWeight: "bold" }}>
      {statusText}
    </Typography>
  );
};

export default AttendanceStatus;