import { Stack, Paper, Typography } from '@mui/material';
import Chart from 'react-google-charts';
import { useGetAttendancePercent } from './common/hooks/useGetAttendancePercent';
import { useSelector } from 'src/common/redux/store';
import AttendancePercentFilter from './components/AttendancePercentFilter';

const AttendancePercent = () => {
  const { dataSearch } = useSelector((state) => state.listAttendancePercent);
  const { dataAttendancePercent } = useGetAttendancePercent(dataSearch);

  console.log('data dataAttendancePercent', dataAttendancePercent);

  const data = [['Year', 'Tỉ lệ đoàn sinh đi học']];
  

  for (const key in dataAttendancePercent) {
    if (Object.prototype.hasOwnProperty.call(dataAttendancePercent, key)) {
      const attendancePercent = dataAttendancePercent[key];
  
      data.push([key, attendancePercent]);
    }
  }

  const options = {
    title: 'Số đoàn sinh đi học theo tháng',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  return (
    <Stack component={Paper} padding={3} textAlign={'center'} spacing={2}>
      <Typography sx={{ fontSize: '32px', color: '#333', fontWeight: 600 }}>
        Thống kê tỉ lệ đoàn sinh đi học
      </Typography>
      <AttendancePercentFilter />
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Stack>
  );
};

export default AttendancePercent;
