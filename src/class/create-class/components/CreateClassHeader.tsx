import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';

export default function CreateClassHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Tạo mới lớp học"}
        links={[
          { name: "Quản lý lớp học", href: PATH_DASHBOARD.class.list },
          { name: "Tạo mới lớp học" },
        ]}
      />
    </>
  );
}
