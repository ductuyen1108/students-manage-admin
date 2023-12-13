import InforDetails from 'src/common/components/details/InforDetails';
import { useGetChienNonById } from '../common/hooks/useGetChienNonById';
import { useParams } from 'react-router-dom';
import Page from 'src/common/components/Page';
import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

const Details = () => {
  const { id } = useParams();
  const { detailsChienNon } = useGetChienNonById(Number(id));
  return (
    <Page title='Thông tin chi tiết đoàn sinh Chiên Non'>
      <HeaderBreadcrumbs
        heading={"Thông tin chi tiết đoàn sinh Chiên Non"}
        links={[
          { name: 'Quản lý đoàn sinh Chiên Non', href: PATH_DASHBOARD.chienNon.list },
          { name: 'Danh sách đoàn sinh Chiên Non', href: PATH_DASHBOARD.chienNon.list },
          { name: 'Chi tiết đoàn sinh Chiên Non' },
        ]}
      />
      <InforDetails detailInfor={detailsChienNon} />
    </Page>
  );
};

export default Details;
