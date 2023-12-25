import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';

export default function CreateLesionHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Tạo mới tiết học"}
        links={[
          { name: "Quản lý tiết học", href: PATH_DASHBOARD.lesion.list },
          { name: "Tạo mới tiết học" },
        ]}
      />
    </>
  );
}
