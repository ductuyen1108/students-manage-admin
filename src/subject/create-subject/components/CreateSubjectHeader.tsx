import HeaderBreadcrumbs from 'src/common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

export default function CreateSubjectHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Tạo mới chủ đề"
        links={[
          { name: 'Quản lý chủ đề', href: PATH_DASHBOARD.subject.list },
          { name: 'Tạo mới chủ đề' },
        ]}
      />
    </>
  );
}
