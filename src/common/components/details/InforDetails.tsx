import { Box, Paper, Stack, Typography } from '@mui/material';
import { IGeneral } from 'src/common/@types/common.interface';
import { getBirthDate, getFamilyRoleLabel, getGenderLabel } from '../convert-enum';

interface Props {
  detailInfor?: IGeneral;
}

const InforDetails = ({ detailInfor }: Props) => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Stack
        spacing={2}
        direction={{ sm: 'row', xs: 'column' }}
        sx={{
          padding: '24px',
          background: '#FAFAFA',
        }}
      >
        <Stack
          component={Paper}
          elevation={3}
          padding={5}
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            sx={{
              background: detailInfor?.avatar
                ? detailInfor?.avatar?.url
                : 'url(https://th.bing.com/th/id/OIP.z39RH4OH53g22aaSCizbkAHaHa?rs=1&pid=ImgDetMain)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '200px',
              borderRadius: '24px',
              height: '200px',
            }}
          ></Box>
          <Typography sx={{ fontSize: '32px', color: '#212529', fontWeight: 600 }}>
            {detailInfor?.name}
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Stack component={Paper} elevation={3} padding={3} spacing={1.5}>
            <InforItem
              title="Họ và tên"
              content={`${detailInfor?.lastName} ${detailInfor?.name}`}
            />
            <InforItem
              title="Ngày sinh"
              content={getBirthDate(detailInfor?.birthDate || '')}
            />
            <InforItem title="Tên thánh" content={detailInfor?.holyName} />
            <InforItem
              title="Giới tính"
              content={getGenderLabel(detailInfor?.gender || '')}
            />
            <InforItem title="Địa chỉ" content={detailInfor?.fullAddress} />
            <InforItem title="Email" content={detailInfor?.family[0]?.email} />
          </Stack>
          <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
            {detailInfor?.family?.map((item) => (
              <Paper
                key={item.role}
                component={Stack}
                elevation={3}
                spacing={1.5}
                padding={3}
              >
                <Typography sx={{ fontSize: '18px', color: '#000', fontWeight: 600 }}>
                  Thông tin {getFamilyRoleLabel(item.role)}
                </Typography>
                <InforItem title="Họ và tên" content={`${item.lastName} ${item.name}`} />
                <InforItem title="Tên thánh" content={item.holyName} />
                <InforItem title="Ngày sinh" content={getBirthDate(item.birthDate)} />
                <InforItem title="Số điện thoại" content={item.phoneNumber} />
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InforDetails;

const InforItem = ({ title, content }: { title: string; content?: string }) => {
  return (
    <Stack spacing={3} direction={'row'}>
      <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#212B36' }}>
        {title}:
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#212B36' }}>
        {content}
      </Typography>
    </Stack>
  );
};
