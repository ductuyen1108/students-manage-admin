import InforDetails from 'src/common/components/details/InforDetails';
import { useGetThieuNhiById } from '../common/hooks/useGetThieuNhiById';
import { useParams } from 'react-router-dom';
import Page from 'src/common/components/Page';
import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

const Details = () => {
  const { id } = useParams();
  const { detailsThieuNhi } = useGetThieuNhiById(Number(id));
  return (
    <Page title='Thông tin chi tiết đoàn sinh Thiếu Nhi'>
      <HeaderBreadcrumbs
        heading={"Thông tin chi tiết đoàn sinh Thiếu Nhi"}
        links={[
          { name: 'Quản lý đoàn sinh Thiếu Nhi', href: PATH_DASHBOARD.thieuNhi.list },
          { name: 'Danh sách đoàn sinh Thiếu Nhi', href: PATH_DASHBOARD.thieuNhi.list },
          { name: 'Chi tiết đoàn sinh Thiếu Nhi' },
        ]}
      />
      <InforDetails detailInfor={detailsThieuNhi} />
    </Page>
  );
};

export default Details;
