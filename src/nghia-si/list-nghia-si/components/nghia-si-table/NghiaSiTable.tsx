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
import ChienNonFilter from '../NghiaSiFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { useGetListNghiaSi } from '../../hooks/useGetListNghiaSi';
import { useSelector } from 'react-redux';
import { dataFilter, setIdDelete, setPopup } from '../../slice';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import TableSkeleton from '../SkeletonTable';
import { Datas, IGeneral, IParams } from 'src/common/@types/common.interface'; 
import { HEAD_TABLE_PROPS } from 'src/nghia-si/common/constant';
import NghiaSiTableRow from './NghiaSiTableRow';
import ModalChangeListClass from 'src/common/components/ModalChangeListClass';

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
  const navigate = useNavigate();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParams = {
    classId: contentFilter.classId,
    holyName: contentFilter.holyName,
    name: contentFilter.name,
    page: page + 1,
    limit: rowsPerPage,
  };

  const { dataNghiaSi, isLoadingData } = useGetListNghiaSi(dataParams);
  console.log("data NghiaSi", dataNghiaSi);
  const listNghiaSi = dataNghiaSi?.items || [];

  const totalItem = dataNghiaSi?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listNghiaSi.map((item) => {
      return item.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const handleEditChienNon = (idChienNon: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.nghiaSi.edit, { id: idChienNon }));
  };
  const handleDetailChienNon = (idChienNon: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.nghiaSi.detail, { id: idChienNon }));
  };

  const isNotFound = !isLoadingData && !listNghiaSi.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <ChienNonFilter onSetPage={setPage} />
      <ModalConfirmDelete />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <TableSelectedActions
            dense={dense}
            isSelectAll={isCheckedAll}
            numSelected={selectedIds.length}
            rowCount={listNghiaSi?.length || 0}
            onSelectAllRows={handleCheckAll}
            actions={
              <Stack direction={"row"} spacing={2}>
                <Tooltip title={'Xóa'}>
                  <IconButton color="primary" onClick={() => handleDeleteRows(selectedIds)}>
                    <Iconify icon={'eva:trash-2-outline'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Chuyển lớp nhiều đoàn sinh'}>
                  <ModalChangeListClass ids={selectedIds}/>
                </Tooltip>
              </Stack>
            }
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
              <NghiaSiTableRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => handleEditChienNon(row.id)}
                onDetailRow={() => handleDetailChienNon(row.id)}
              />
            ))}
            <TableSkeleton isLoading={isLoadingData} row={rowsPerPage} />
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
    </Paper>
  );
}

export default NghiaSiTable;
