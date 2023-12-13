import InforDetails from 'src/common/components/details/InforDetails';
import { useGetHiepSiById } from '../common/hooks/useGetHiepSiById';
import { useParams } from 'react-router-dom';
import Page from 'src/common/components/Page';
import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

const Details = () => {
  const { id } = useParams();
  const { detailsHiepSi } = useGetHiepSiById(Number(id));
  return (
    <Page title='Thông tin chi tiết đoàn sinh Hiêp Sĩ'>
      <HeaderBreadcrumbs
        heading={"Thông tin chi tiết đoàn sinh Hiêp Sĩ"}
        links={[
          { name: 'Quản lý đoàn sinh Hiêp Sĩ', href: PATH_DASHBOARD.hiepSi.list },
          { name: 'Danh sách đoàn sinh Hiêp Sĩ', href: PATH_DASHBOARD.hiepSi.list },
          { name: 'Chi tiết đoàn sinh Hiêp Sĩ' },
        ]}
      />
      <InforDetails detailInfor={detailsHiepSi} />
    </Page>
  );
};

export default Details;
