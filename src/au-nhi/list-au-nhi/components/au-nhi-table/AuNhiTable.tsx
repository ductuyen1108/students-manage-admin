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
import ChienNonFilter from '../AuNhiFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { useGetListAuNhi } from '../../hooks/useGetListAuNhi';
import { useSelector } from 'react-redux';
import { dataFilter, setIdDelete, setPopup } from '../../slice';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import TableSkeleton from '../SkeletonTable';
import { Datas, IGeneral, IParams } from 'src/common/@types/common.interface'; 
import { HEAD_TABLE_PROPS } from 'src/au-nhi/common/constant';
import AuNhiTableRow from './AuNhiTableRow';
import ModalChangeListClass from 'src/common/components/ModalChangeListClass';

function AuNhiTable() {
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

  const { dataAuNhi, isLoadingData } = useGetListAuNhi(dataParams);
  console.log("data AuNhi", dataAuNhi);
  const listAuNhi = dataAuNhi?.items || [];

  const totalItem = dataAuNhi?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listAuNhi.map((item) => {
      return item.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const handleEditAuNhi = (idAuNhi: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.auNhi.edit, { id: idAuNhi }));
  };
  const handleDetailAuNhi = (idAuNhi: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.auNhi.detail, { id: idAuNhi }));
  };

  const isNotFound = !isLoadingData && !listAuNhi.length;

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
            rowCount={listAuNhi?.length || 0}
            onSelectAllRows={handleCheckAll}
            actions={
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Tooltip title={'Xóa'}>
                  <IconButton color="primary" onClick={() => handleDeleteRows(selectedIds)}>
                    <Iconify icon={'eva:trash-2-outline'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Chuyển lớp nhiều đoàn sinh'}>
                  <ModalChangeListClass branchName='AU_NHI' ids={selectedIds} />
                </Tooltip>
              </Stack>
            }
          />
        )}
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            headLabel={HEAD_TABLE_PROPS}
            rowCount={listAuNhi?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listAuNhi?.map((row) => (
              <AuNhiTableRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => handleEditAuNhi(row.id)}
                onDetailRow={() => handleDetailAuNhi(row.id)}
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

export default AuNhiTable;
