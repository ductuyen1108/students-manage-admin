import {
  Box,
  FormControlLabel,
  IconButton,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tooltip,
} from '@mui/material';
import LessionFilter from '../ScoreFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { useGetListScore } from 'src/score/common/hooks/useGetListScore';
import { useSelector } from 'react-redux';
import { dataFilter, setIdDelete, setPopup } from '../../slice';
import ScoreTableRow from './ScoreTableRow';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import TableSkeleton from '../SkeletonTable';
import { IParamsScore } from 'src/score/common/interface';
import { HEAD_TABLE_PROPS } from 'src/score/common/constant';
import { useCreateAttendance } from 'src/attendance/common/hooks/useCreateAttendance';
import useShowSnackbar from 'src/common/hooks/useMessage';
import { useState } from 'react';

function AttendanceTable() {
  const {
    dense,
    page,
    rowsPerPage,
    setPage,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParamsScore = {
    classId: contentFilter.classId,
  };

  const { listScore, isLoadingListScore } = useGetListScore(dataParams);
  const listScores = listScore?.items || [];

  const totalItem = listScore?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listScores.map((score) => {
      return score.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const isNotFound = !isLoadingListScore && !listScores.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <LessionFilter onSetPage={setPage} />
      <ModalConfirmDelete />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <>
            <TableSelectedActions
              dense={dense}
              isSelectAll={isCheckedAll}
              numSelected={selectedIds.length}
              rowCount={listScores?.length || 0}
              onSelectAllRows={handleCheckAll}
              actions={
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Tooltip title={t('news.list.delete')}>
                    <IconButton
                      color="primary"
                      onClick={() => handleDeleteRows(selectedIds)}
                    >
                      <Iconify icon={'eva:trash-2-outline'} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            />
          </>
        )}
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            headLabel={HEAD_TABLE_PROPS}
            rowCount={listScores?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listScores?.map((row) => (
              <ScoreTableRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row?.student.id)}
                onSelectRow={(e) => handleSelectItem(row?.student.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row?.id]);
                }}
                onEditRow={() => setShowPopup(true)}
                onDetailRow={() => console.log('hello')}
              />
            ))}
            <TableSkeleton isLoading={isLoadingListScore} row={rowsPerPage} />
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
          label={t('news.list.dense')}
          sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
        />
      </Box>
    </Paper>
  );
}

export default AttendanceTable;
