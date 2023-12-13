import InforDetails from 'src/common/components/details/InforDetails';
import { useGetNghiaSiById } from '../common/hooks/useGetNghiaSiById';
import { useParams } from 'react-router-dom';
import Page from 'src/common/components/Page';
import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

const Details = () => {
  const { id } = useParams();
  const { detailsNghiaSi } = useGetNghiaSiById(Number(id));
  return (
    <Page title='Thông tin chi tiết đoàn sinh Nghĩa Sĩ'>
      <HeaderBreadcrumbs
        heading={"Thông tin chi tiết đoàn sinh Nghĩa Sĩ"}
        links={[
          { name: 'Quản lý đoàn sinh Nghĩa Sĩ', href: PATH_DASHBOARD.nghiaSi.list },
          { name: 'Danh sách đoàn sinh Nghĩa Sĩ', href: PATH_DASHBOARD.nghiaSi.list },
          { name: 'Chi tiết đoàn sinh Nghĩa Sĩ' },
        ]}
      />
      <InforDetails detailInfor={detailsNghiaSi} />
    </Page>
  );
};

export default Details;
