import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import ScoreListHeader from './components/ScoreListHeader';
import ScoreTable from './components/score-table/ScoreTable';
import { Container } from '@mui/material';

export default function ListNews() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Danh sách điểm đoàn sinh"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <ScoreListHeader />
        <ScoreTable />
      </Container>
    </Page>
  );
}
