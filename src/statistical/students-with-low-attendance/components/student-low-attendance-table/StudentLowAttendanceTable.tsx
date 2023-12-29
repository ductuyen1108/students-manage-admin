import {
  Box,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';
import StudentLowAttendanceFilter from '../StudentLowAttendanceFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { usegetStudentLowAttendance } from '../../common/hooks/useGetStudentLowAttendance';
import { useSelector } from 'react-redux';
import { dataFilter } from '../../slice';
import TableSkeleton from '../SkeletonTable';
import { IParamsStudentLowAttendance } from '../../common/interface';
import { HEAD_TABLE_PROPS } from '../../common/constant';
import StudentLowAttendanceTableRow from './StudentLowAttendanceTableRow';

function NghiaSiTable() {
  const {
    dense,
    page,
    rowsPerPage,
    setPage,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParamsStudentLowAttendance = {
    branch: contentFilter.branch,
    endDate: contentFilter.endDate,
    startDate: contentFilter.startDate,
  };

  const { dataAttendancePercent, isLoading } = usegetStudentLowAttendance(dataParams);
  console.log('data NghiaSi', dataAttendancePercent);
  const listNghiaSi = dataAttendancePercent || [];

  const totalItem = dataAttendancePercent?.length || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listNghiaSi.map((item) => {
      return item.student.id;
    }),
    page + 1
  );

  const isNotFound = !isLoading && !listNghiaSi.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <Stack spacing={2}>
        <StudentLowAttendanceFilter onSetPage={setPage} />
        <TableContainer sx={{ position: 'relative' }}>
          {!!selectedIds.length && (
            <TableSelectedActions
              dense={dense}
              isSelectAll={isCheckedAll}
              numSelected={selectedIds.length}
              rowCount={listNghiaSi?.length || 0}
              onSelectAllRows={handleCheckAll}
              actions={<></>}
            />
          )}
          <Table size={dense ? 'small' : 'medium'}>
            <TableHeadCustom
              headLabel={HEAD_TABLE_PROPS}
              rowCount={listNghiaSi?.length}
              numSelected={selectedIds.length}
              isSelectAll={isCheckedAll}
              onSelectAllRows={handleCheckAll}
            />
            <TableBody>
              {listNghiaSi?.map((row) => (
                <StudentLowAttendanceTableRow
                  key={row?.student?.id}
                  row={row}
                  selected={selectedIds.includes(row.student?.id)}
                  onSelectRow={(e) => handleSelectItem(row.student?.id, e)}
                />
              ))}
              <TableSkeleton isLoading={isLoading} row={rowsPerPage} />
              <TableNoData isNotFound={isNotFound} />
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ position: 'relative' }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={totalItem}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />
          <FormControlLabel
            control={<Switch checked={dense} onChange={onChangeDense} />}
            label={'Thu gọn'}
            sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default NghiaSiTable;
