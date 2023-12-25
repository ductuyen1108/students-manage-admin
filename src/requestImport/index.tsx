import { Container } from '@mui/material';
import useSettings from '../common/hooks/useSettings';
import Page from '../common/components/Page';
import HeaderBreadcrumbs from '../common/components/HeaderBreadcrumbs';
import { ListFileImportDashboard } from './components/FileImportDashboard';

export default function FileImport() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Danh sách file import"}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={"Danh sách file import"}
          links={[
            {
              name: `Danh sách file`,
              href: '',
            },
            {
              name: `${"Danh sách file import"}`,
              href: '',
            },
          ]}
        />
        <ListFileImportDashboard />
      </Container>
    </Page>
  );
}
