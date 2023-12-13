import { IconButton, Tooltip, Stack } from '@mui/material';
import React from 'react';
import Iconify from './Iconify';

const QuestionMark = ({ title }: { title: string }) => {
  return (
    <Tooltip
      title={title}
      placement="top-start"
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltip': {
            border: '1px solid #E6E8ED',
            color: '#637381',
            backgroundColor: '#fff',
            boxShadow: '0 0.0625rem 0 #00000012',
            fontSize: '13px',
          },

          '& .MuiTooltip-arrow': {
            '&::before': {
              backgroundColor: '#00000012',
            },
          },
        },
      }}
    >
      <Stack alignItems={'center'} justifyContent={'center'} mr={2}>
        <Iconify icon={'mingcute:question-line'} color={'#8a8a8a'} fontSize={'20px'} />
      </Stack>
    </Tooltip>
  );
};

export default QuestionMark;
