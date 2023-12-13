import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import ListContactHeader from './components/ListContactHeader';
import ListContactTable from './components/table/ListContactTable';
import { Container } from '@mui/material';

export default function ListContact() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Danh sách LH">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ListContactHeader />
        <ListContactTable />
      </Container>
    </Page>
  );
}
