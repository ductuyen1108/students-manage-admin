import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';
import { useGetCountStudent } from './common/hooks/useGetCountStudent';
import ChartClassAndCount from './components/ChartClassAndCount';

const CountStudentStatistical = () => {
  
  const { countStudentData, isLoading } = useGetCountStudent();

  const datas = [
    ['Task', 'Hours per Day'],
    ['Đoàn sinh chiên non', countStudentData?.studentInBranchChienNon],
    ['Đoàn sinh ấu nhi', countStudentData?.studentInBranchAuNhi],
    ['Đoàn sinh hiệp sĩ', countStudentData?.studentInBranchHiepSi],
    ['Đoàn sinh nghĩa sĩ', countStudentData?.studentInBranchNghiaSi],
    ['Đoàn sinh thiếu nhi', countStudentData?.studentInBranchThieuNhi],
  ];

  return (
    <Stack spacing={2}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Typography variant="h3" sx={{ color: '#212B36' }}>
            Thống kê số lượng đoàn sinh các ngành
          </Typography>
          <Chart chartType="PieChart" data={datas} width={'100%'} height={'400px'} />
          <Grid container justifyContent={'space-between'} rowSpacing={2}>
            <Grid item sm={2.4} xs={12}>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(51, 102, 204)' }}
              >
                Đoàn sinh chiên non: {countStudentData?.studentInBranchChienNon}
              </Typography>
            </Grid>
            <Grid item sm={2.4} xs={12}>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(220, 57, 18)' }}
              >
                Đoàn sinh ấu nhi: {countStudentData?.studentInBranchAuNhi}
              </Typography>
            </Grid>
            <Grid item sm={2.4} xs={12}>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(255, 153, 0)' }}
              >
                Đoàn sinh hiệp sĩ: {countStudentData?.studentInBranchHiepSi}
              </Typography>
            </Grid>
            <Grid item sm={2.4} xs={12}>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(16, 150, 24)' }}
              >
                Đoàn sinh nghĩa sĩ: {countStudentData?.studentInBranchNghiaSi}
              </Typography>
            </Grid>
            <Grid item sm={2.4} xs={12}>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(153, 0, 153)' }}
              >
                Đoàn sinh thiếu nhi: {countStudentData?.studentInBranchThieuNhi}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
      <ChartClassAndCount />
    </Stack>
  );
};

export default CountStudentStatistical;
