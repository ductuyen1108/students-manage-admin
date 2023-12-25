import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

function EditLessionHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Chỉnh sửa tiết học"
        links={[
          { name: 'Quản lý tiết học', href: PATH_DASHBOARD.lesion.list },
          { name: 'Danh sách tiết học', href: PATH_DASHBOARD.lesion.edit },
          { name: 'Chỉnh sửa tiết học' },
        ]}
      />
    </>
  );
}

export default EditLessionHeader;
