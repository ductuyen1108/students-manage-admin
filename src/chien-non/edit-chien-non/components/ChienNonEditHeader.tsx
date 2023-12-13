import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';

export default function ChienNonEditHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Chỉnh sửa đoàn sinh Chiên Non"}
        links={[
          { name: 'Quản lý đoàn sinh Chiên Non', href: PATH_DASHBOARD.news.list },
          { name: 'Danh sách đoàn sinh Chiên Non', href: PATH_DASHBOARD.news.list },
          { name: 'Chỉnh sửa đoàn sinh Chiên Non' },
        ]}
      />
    </>
  );
}
