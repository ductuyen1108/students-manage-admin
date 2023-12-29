import { TableCell, TableRow, Checkbox } from '@mui/material';
import { IPropTableRow } from '../../common/interface';
import { getAge, getBirthDate, getGenderLabel } from 'src/common/components/convert-enum';

export default function NghiaSiTableRow({ row, selected, onSelectRow }: IPropTableRow) {
  const { student, attendancePercentage } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onChange={(e) => onSelectRow(e.target.checked)} />
      </TableCell>
      <TableCell align="center">{student?.id}</TableCell>
      <TableCell
        align="center"
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
        {student?.lastName} {student?.name}
      </TableCell>
      <TableCell align="center">{getBirthDate(student?.birthDate)}</TableCell>
      <TableCell align="center">{getGenderLabel(student?.gender)}</TableCell>
      <TableCell align="center">{student?.branchName}</TableCell>
      <TableCell align="center">{attendancePercentage}</TableCell>
    </TableRow>
  );
}
