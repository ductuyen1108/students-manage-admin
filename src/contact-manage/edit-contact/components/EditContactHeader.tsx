import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function EditGuideHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Chỉnh sửa liên hệ"
        links={[
          { name: 'Quản lý LH', href: PATH_DASHBOARD.contact.list },
          { name: 'Danh sách LH', href: PATH_DASHBOARD.contact.list },
          { name: 'Chỉnh sửa LH' },
        ]}
      />
    </>
  );
}
