import {
  Box,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tooltip,
} from '@mui/material';
import ClassFilter from '../ClassFilter';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { useGetListClass } from 'src/class/common/hooks/useGetListClass';
import { useSelector } from 'react-redux';
import { dataFilter, setIdDelete, setPopup } from '../../slice';
import ClassTableRow from './ClassTableRow';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import TableSkeleton from '../SkeletonTable';
import { IParamsClass } from 'src/class/common/interface';
import { HEAD_TABLE_PROPS } from 'src/class/common/constant';

function ClassTable() {
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
  const navigate = useNavigate();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParamsClass = {
    branchName: contentFilter.branchName,
    className: contentFilter.className
  };

  console.log("data params", dataParams);

  const { isLoadingListClass, listClass } = useGetListClass(dataParams);
  console.log("data news", listClass);
  const listNews = listClass?.items || [];

  const totalItem = listClass?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listNews.map((news) => {
      return news.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const handleEditNews = (idNews: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.class.edit, { id: idNews }));
  };
  const handleDetailNews = (idNews: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.class.detail, { id: idNews }));
  };

  const isNotFound = !isLoadingListClass && !listNews.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <ClassFilter onSetPage={setPage} />
      <ModalConfirmDelete />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <TableSelectedActions
            dense={dense}
            isSelectAll={isCheckedAll}
            numSelected={selectedIds.length}
            rowCount={listNews?.length || 0}
            onSelectAllRows={handleCheckAll}
            actions={
              <Tooltip title={t('news.list.delete')}>
                <IconButton color="primary" onClick={() => handleDeleteRows(selectedIds)}>
                  <Iconify icon={'eva:trash-2-outline'} />
                </IconButton>
              </Tooltip>
            }
          />
        )}
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            headLabel={HEAD_TABLE_PROPS}
            rowCount={listNews?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listNews?.map((row) => (
              <ClassTableRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => handleEditNews(row.id)}
                onDetailRow={() => handleDetailNews(row.id)}
              />
            ))}
            <TableSkeleton isLoading={isLoadingListClass} row={rowsPerPage} />
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

export default ClassTable;
