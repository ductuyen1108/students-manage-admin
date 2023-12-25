import { Checkbox, MenuItem, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../../../common/components/Iconify';
import { TableMoreMenu } from '../../../../common/components/table';
import { useTranslation } from 'react-i18next';
import { IPropTableRow } from 'src/attendance/common/interface';
import { getGenderLabel } from 'src/common/components/convert-enum';

export default function AttendanceTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onAttendanceRow,
  onDetailRow,
}: IPropTableRow) {
  const { t } = useTranslation();
  const { student } = row;
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);

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
      <TableCell align="center">{student.id}</TableCell>
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
        {student.student.lastName} {student.student.name}
      </TableCell>
      <TableCell align="center">{getGenderLabel(student.student.gender)}</TableCell>
      <TableCell align="center">
        <Checkbox checked={student.attended} />
      </TableCell>
      <TableCell align="center">
        <TableMoreMenu
          open={openMenu}
          onClose={handleCloseMenu}
          onOpen={handleOpenMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                {t('news.list.delete')}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onAttendanceRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'gg:add'} />
                Điểm danh
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
}
