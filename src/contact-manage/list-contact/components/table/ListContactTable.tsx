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
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch, useDispatch, useSelector } from '../../../../common/redux/store';
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import LoadingTableSkeleton from '../../../../common/components/LoadingTableSkeleton';
import { useGetListContact } from '../../hooks/useGetListContact';
import { HEAD_TABLE_PROPS } from 'src/contact-manage/common/constant';
import ContactRow from './ContactRow';
import ListContactFilter from '../ListContactFilter';
import { ConfirmModal } from 'src/common/components/modal/ConfirmModal';
import { setIdsDelete, setPopup } from '../../slice';
import { useDeleteContacts } from '../../hooks/useDeleteContacts';
import useShowSnackbar from 'src/common/hooks/useMessage';
import { IParamsListContact } from 'src/contact-manage/common/interface';

function ListContactTable() {
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
  const dispatch = useDispatch();
  const { dataFilter, showPopup, idsDelete } = useSelector((state) => state.listContact);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const { mutate } = useDeleteContacts({
    onSuccess: () => {
      showSuccessSnackbar('Xóa liên hệ thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa liên hệ thất bại');
    },
  });

  const dataParams: IParamsListContact = {
    name: dataFilter.name === '' ? undefined : dataFilter.name,
    phoneNumber: dataFilter.phoneNumber === '' ? undefined : dataFilter.phoneNumber,
    email: dataFilter.email === '' ? undefined : dataFilter.email,
    company: dataFilter.company === '' ? undefined : dataFilter.company,
    fromDate: dataFilter.fromDate === null ? undefined : dataFilter.fromDate,
    toDate: dataFilter.toDate === null ? undefined : dataFilter.toDate,
    page: page + 1,
    limit: rowsPerPage,
  };

  const { data, isLoading } = useGetListContact(dataParams);
  const listContact = data?.items || [];

  const totalItem = data?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listContact.map((item) => {
      return item.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdsDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const onDeleteMultiple = () => {
    mutate({ ids: idsDelete });
    dispatch(setIdsDelete([]));
  };

  const handleEditContact = (idContact: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.contact.edit, { id: idContact }));
  };

  const isNotFound = !isLoading && !listContact.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <ListContactFilter onSetPage={setPage} />
      <ConfirmModal
        isOpen={showPopup}
        onClose={() => dispatch(setPopup(false))}
        onSubmit={onDeleteMultiple}
        type={'delete'}
        text={'Bạn có chắc muốn xóa liên hệ đã chọn?'}
      />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <TableSelectedActions
            dense={dense}
            isSelectAll={isCheckedAll}
            numSelected={selectedIds.length}
            rowCount={listContact?.length || 0}
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
            rowCount={listContact?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listContact?.map((row) => (
              <ContactRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => handleEditContact(row.id)}
                //   onDetailRow={() => handleDetailNews(row.id)}
              />
            ))}
            {isLoading && (
              <LoadingTableSkeleton
                row={rowsPerPage}
                column={HEAD_TABLE_PROPS.length + 1}
              />
            )}
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

export default ListContactTable;
