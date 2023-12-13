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
import TableSkeleton from '../SkeletonTable';
import {
  TableHeadCustom,
  TableNoData,
  TableSelectedActions,
} from '../../../../common/components/table';
import Iconify from '../../../../common/components/Iconify';
import useTable from '../../../../common/hooks/useTable';
import { useSelectMultiple } from '../../../../common/hooks/useSelectMultiple';
import { useNavigate } from 'react-router-dom';
import { setIdDelete, setPopup } from '../../slice';
import { replacePathParams } from '../../../../common/utils/replaceParams';
import { dispatch } from '../../../../common/redux/store';
import ModalConfirmDelete from '../ModalConfirmDelete';
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../../../common/routes/paths';
import { useGetListSubject } from '../../hooks/useGetListSubject';
import SubjectTableRow from './subjectTableRow';
import { ISubjectParams } from 'src/subject/common/interface';
import { HEAD_TABLE_PROPS } from 'src/subject/common/constant';

function SubjectTable() {
  const { dense, page, rowsPerPage, onChangeDense, onChangePage, onChangeRowsPerPage } =
    useTable();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dataParams: ISubjectParams = {
    page: page + 1,
    limit: rowsPerPage,
  };

  const { dataNewsSubject, isLoadingData } = useGetListSubject(dataParams);
  console.log("datas news subject", dataNewsSubject);
  const listNewsSubject = dataNewsSubject?.items || [];

  const totalItem = dataNewsSubject?.meta?.totalItems || 0;
  const isNotFound = !isLoadingData && !listNewsSubject.length;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listNewsSubject.map((news) => {
      return news.id;
    }),
    page + 1
  );

  const handleDeleteRows = (id: number[]) => {
    dispatch(setIdDelete(id));
    dispatch(setPopup(true));
    resetSelect();
  };

  const handleEditSubject = (idSubject: number) => {
    navigate(replacePathParams(PATH_DASHBOARD.subject.edit, { id: idSubject }));
  };

  return (
    <Paper elevation={3} sx={{ py: 1 }}>
      <ModalConfirmDelete />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <TableSelectedActions
            dense={dense}
            isSelectAll={isCheckedAll}
            numSelected={selectedIds.length}
            rowCount={listNewsSubject?.length || 0}
            onSelectAllRows={handleCheckAll}
            actions={
              <Tooltip title={t('news_subject.list.delete')}>
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
            rowCount={listNewsSubject?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listNewsSubject.map((row) => (
              <SubjectTableRow
                key={row.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => handleEditSubject(row.id)}
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
          label={t('news_subject.list.dense')}
          sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
        />
      </Box>
    </Paper>
  );
}

export default SubjectTable;
