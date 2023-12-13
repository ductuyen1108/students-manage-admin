import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { BREADCUMBS } from '../../../common/constants/common.constants';
import vn from '../../../common/locales/vn';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

function EditSubjectHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Chỉnh sửa chủ đề"
        links={[
          { name: 'Quản lý chủ đề', href: PATH_DASHBOARD.subject.list },
          { name: 'Danh sách chủ đề', href: PATH_DASHBOARD.subject.edit },
          { name: 'Chỉnh sửa chủ đề' },
        ]}
      />
    </>
  );
}

export default EditSubjectHeader;
