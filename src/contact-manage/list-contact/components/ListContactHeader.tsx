import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function ListContactHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Danh sách liên hệ"
        links={[
          { name: 'Quản lý LH', href: PATH_DASHBOARD.contact.list },
          { name: 'Danh sách LH' },
        ]}
      />
    </>
  );
}
