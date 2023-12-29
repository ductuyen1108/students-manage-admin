import { Grid, Paper, Stack, Typography } from '@mui/material';
import Chart from 'react-google-charts';
import { useSelector } from 'src/common/redux/store';
import { useGetClassAndCount } from '../count-student/common/hooks/useGetClassAndCount'; 
import ClassAndCountFilter from '../count-student/components/ClassAndCountFIlter'; 
import { dataFilter } from '../attendance-percent/slice';

const ClassAndCount = () => {
  const cotentFilter = useSelector(dataFilter);

  const dataFIlter = cotentFilter.branch;
  const { classAndCountData, isLoadingClassAndCount } = useGetClassAndCount({branch: dataFIlter});

  const data: any = [["Task", "Hours per Day"]];

classAndCountData?.classInfo?.forEach(item => {
  const className = item.class.className;
  const totalStudents = item.totalStudents;

  data.push([className, (totalStudents)]);
});
  console.log("data", data);
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
        <Typography variant="h3" sx={{ color: '#212B36' }}>
          Thống kê số lượng đoàn sinh các lớp theo ngành
        </Typography>
        <ClassAndCountFilter />
        <Chart chartType="PieChart" data={data} width={'100%'} height={'400px'} />
        <Grid container justifyContent={'space-between'} rowSpacing={2} alignItems={"center"} justifyItems={"center"}>
          {classAndCountData?.classInfo?.map(item => (
            <Grid key={item.class.className} item>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 400, color: 'rgb(51, 102, 204)' }}
              >
                Lớp {item?.class?.className}: {item?.totalStudents} học sinh
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default ClassAndCount;
