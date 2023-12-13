import { Box, Checkbox, MenuItem, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../../../common/components/Iconify';
import { TableMoreMenu } from '../../../../common/components/table';
import { useTranslation } from 'react-i18next';
import { IPropTableRow } from 'src/subject/common/interface';

export default function SubjectTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
}: IPropTableRow) {
  const { t } = useTranslation();
  const { id, subjectDetails, priority, thumbnail } = row;
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
      <TableCell align="center">{id}</TableCell>
      <TableCell align="left" sx={{ maxWidth: '70px' }}>
        {thumbnail?.url ? (
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
              borderRadius: '7px',
              objectFit: 'cover',
            }}
            alt={subjectDetails[0]?.name}
            src={`${thumbnail?.url}`}
          />
        ) : (
          <></>
        )}
      </TableCell>
      <TableCell
        align="left"
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
        onClick={onEditRow}
      >
        {subjectDetails[0]?.name}
      </TableCell>
      <TableCell align="center">{priority || ''}</TableCell>
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
                {t('news_subject.list.delete')}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                {t('news_subject.list.edit')}
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
}
