import { Stack, Paper, Typography } from '@mui/material';
import Chart from 'react-google-charts';
import { useGetAttendancePercent } from './common/hooks/useGetAttendancePercent';
import { useSelector } from 'src/common/redux/store';
import AttendancePercentFilter from './components/AttendancePercentFilter';

export const data = [
  ['Year', 'Sales', 'Expenses'],
  ['2004', 1000, 400],
  ['2005', 1170, 460],
  ['2006', 660, 1120],
  ['2007', 1030, 540],
];

export const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
};

interface AttendanceData {
  [key: string]: number;
}

const AttendancePercent = () => {
  const {dataSearch} = useSelector((state) => state.listAttendancePercent);
  const { dataAttendancePercent } = useGetAttendancePercent(dataSearch)
  console.log("dataAttendancePercent", dataAttendancePercent);
  const convertedData =
    Array.isArray(dataAttendancePercent) && dataAttendancePercent.length > 0
      ? dataAttendancePercent.map((entry: { [key: string]: number }) => {
          const month = Object.keys(entry)[0];
          const value = entry[month];
          return [month, value];
        })
      : [];

  // Thêm tiêu đề cho cột
  convertedData.unshift(["Year", "Sales"]);

  console.log('mang',convertedData);
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
