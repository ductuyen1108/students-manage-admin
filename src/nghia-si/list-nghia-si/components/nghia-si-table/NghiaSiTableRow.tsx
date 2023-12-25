import { Box, Checkbox, MenuItem, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../../../common/components/Iconify';
import { TableMoreMenu } from '../../../../common/components/table';
import { IPropTableRow } from 'src/common/@types/common.interface';
import {
  getAge,
  getBirthDate,
  getGenderLabel,
  getStudentStatuslabel,
} from 'src/common/components/convert-enum';
import ModalSelectClassId from 'src/common/components/ModalSelectClassId';
import useShowSnackbar from 'src/common/hooks/useMessage';
import { useEditNghiaSiInActive } from 'src/nghia-si/edit-nghia-si/hooks/useEditNghiaSi';

export default function NghiaSiTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  onDetailRow,
}: IPropTableRow) {
  const { id, holyName, name, birthDate, gender, lastName, status, class: classData } = row;
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate } = useEditNghiaSiInActive({
    onSuccess: () => {
      showSuccessSnackbar("Khóa tài khoản đoàn sinh thành công")
    },
    onError: () => {
      showErrorSnackbar("Khóa tài khoản đoàn sinh thất bại")
    }
  })

  const handleOpenMenu = (category: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(category.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onChange={(e) => onSelectRow(e.target.checked)} />
      </TableCell>
      <TableCell align="center">{id}</TableCell>
      <TableCell
        align="center"
        onClick={onDetailRow}
        sx={{
          alignItems: 'center',
          '&:hover': { color: '#D5B4B4', cursor: 'pointer' },
          color: 'red',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          maxWidth: 150,
          textOverflow: 'ellipsis',
          overflow: 'hidden!important',
          whiteSpace: 'nowrap',
        }}
      >
        {holyName}
      </TableCell>
      <TableCell align="center">
        {lastName} {name}
      </TableCell>
      <TableCell align="center">{getBirthDate(birthDate)}</TableCell>
      <TableCell align="center">{getGenderLabel(gender)}</TableCell>
      <TableCell align="center">{getAge(birthDate)}</TableCell>
      <TableCell align="center">{classData?.className ? classData?.className : "Chưa cập nhật"}</TableCell>
      <TableCell align="center">{getStudentStatuslabel(status)}</TableCell>
      <TableCell align="center">
        <TableMoreMenu
          open={openMenu}
          onClose={handleCloseMenu}
          onOpen={handleOpenMenu}
          actions={
            <>
              <ModalSelectClassId id={id} />
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                  mutate(id)
                }}
              >
                <Iconify icon={'basil:user-block-outline'} />
                Khóa tài khoản
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Xóa
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
}
