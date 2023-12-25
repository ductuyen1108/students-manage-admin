import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { BREADCUMBS } from '../../../common/constants/common.constants';
import vn from '../../../common/locales/vn';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

function EditClassHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Chỉnh sửa lớp học"
        links={[
          { name: 'Quản lý lớp học', href: PATH_DASHBOARD.class.list },
          { name: 'Danh sách lớp học', href: PATH_DASHBOARD.class.edit },
          { name: 'Chỉnh sửa lớp học' },
        ]}
      />
    </>
  );
}

export default EditClassHeader;
