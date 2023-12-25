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
import LessionFilter from '../AttendanceFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { useGetListAttendance } from 'src/attendance/common/hooks/useGetListAttendance';
import { useSelector } from 'react-redux';
import { dataFilter, setIdDelete, setIdLesson, setPopup } from '../../slice';
import AttendanceTableRow from './AttendanceTableRow';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import TableSkeleton from '../SkeletonTable';
import {
  IDataCreateAttendance,
  IParamsAttendance,
} from 'src/attendance/common/interface';
import { HEAD_TABLE_PROPS } from 'src/attendance/common/constant';
import { useCreateAttendance } from 'src/attendance/common/hooks/useCreateAttendance';
import useShowSnackbar from 'src/common/hooks/useMessage';

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
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParamsAttendance = {
    classId: contentFilter.classId,
    lessionId: contentFilter.lessionId,
  };

  console.log('data params', dataParams);

  const { listAttendance, isLoadingListAttendance } = useGetListAttendance(dataParams);
  console.log('data lesion', listAttendance);
  const { mutate: mutateCreate } = useCreateAttendance({
    onSuccess: () => {
      showSuccessSnackbar('Điểm danh thành công');
      resetSelect();
    },
    onError: () => {
      showErrorSnackbar('Điểm danh thất bại');
    },
  });
  const listAtt = listAttendance?.items || [];

  const totalItem = listAttendance?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listAtt.map((news) => {
      return news.student.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setIdLesson(dataParams.lessionId || 0));
    dispatch(setPopup(true));
    resetSelect();
  };

  const handleCreateAttendance = (id: number) => {
    const dataCreate: IDataCreateAttendance = {
      lessionId: dataParams.lessionId || 0,
      studentIds: [id],
    };
    console.log("daa đơn: ", dataCreate);
    mutateCreate(dataCreate);
  };

  const handleCreateListAttendance = (ids: number[]) => {
    const dataCreate: IDataCreateAttendance = {
      lessionId: dataParams.lessionId || 0,
      studentIds: ids,
    };
    mutateCreate(dataCreate);
  };

  const isNotFound = !isLoadingListAttendance && !listAtt.length;

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
              rowCount={listAtt?.length || 0}
              onSelectAllRows={handleCheckAll}
              actions={
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Tooltip title={t('news.list.delete')}>
                    <IconButton
                      color="primary"
                      onClick={() => handleDeleteRows(selectedIds)}
                    >
                      <Iconify icon={'eva:trash-2-outline'} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Điểm danh các đoàn sinh đã chọn"}>
                    <IconButton color="primary" onClick={() => handleCreateListAttendance(selectedIds)}>
                      <Iconify icon={'gg:add'} />
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
            rowCount={listAtt?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listAtt?.map((row) => (
              <AttendanceTableRow
                key={row?.student.id}
                row={row}
                selected={selectedIds.includes(row?.student.id)}
                onSelectRow={(e) => handleSelectItem(row?.student.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row?.student.id]);
                }}
                onAttendanceRow={() => handleCreateAttendance(row?.student.id)}
                onDetailRow={() => console.log('hello')}
              />
            ))}
            <TableSkeleton isLoading={isLoadingListAttendance} row={rowsPerPage} />
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
