import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import LessionListHeader from './components/LessionListHeader';
import LessionTable from './components/lession-table/LessionTable';
import { Container } from '@mui/material';

export default function ListNews() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Danh sách tiết học"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <LessionListHeader />
        <LessionTable />
      </Container>
    </Page>
  );
}
