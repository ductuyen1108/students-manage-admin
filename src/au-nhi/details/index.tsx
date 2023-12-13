import InforDetails from 'src/common/components/details/InforDetails';
import { useGetAuNhiById } from '../common/hooks/useGetAuNhiById';
import { useParams } from 'react-router-dom';
import Page from 'src/common/components/Page';
import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

const Details = () => {
  const { id } = useParams();
  const { detailsChienNon } = useGetAuNhiById(Number(id));
  return (
    <Page title='Thông tin chi tiết đoàn sinh Âu Nhi'>
      <HeaderBreadcrumbs
        heading={"Thông tin chi tiết đoàn sinh Âu Nhi"}
        links={[
          { name: 'Quản lý đoàn sinh Âu Nhi', href: PATH_DASHBOARD.auNhi.list },
          { name: 'Danh sách đoàn sinh Âu Nhi', href: PATH_DASHBOARD.auNhi.list },
          { name: 'Chi tiết đoàn sinh Âu Nhi' },
        ]}
      />
      <InforDetails detailInfor={detailsChienNon} />
    </Page>
  );
};

export default Details;
