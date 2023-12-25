export const defaultValueFilter = {
  classId: undefined,
};

export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'title', label: "Tiêu đề", align: 'center' },
  { id: 'content', label: "Nội dung", align: 'center' },
  { id: 'startTime', label: "Thời gian bắt đầu", align: 'center' },
  { id: 'endTime', label: "Thời gian kết thúc", align: 'center' },
  { id: 'className', label: "Tên lớp", align: 'center' },
  { id: '', label: "Tùy chọn", align: 'center' },
];

export const optionBranchName = [
  { name: "AU_NHI", id: 'AU_NHI' },
  { name: "CHIEN_NON", id: 'CHIEN_NON' },
  { name: "HIEP_SI", id: 'HIEP_SI' },
  { name: "NGHIA_SI", id: 'NGHIA_SI' },
  { name: "THIEU_NHI", id: 'THIEU_NHI' },
];

export const DEFAULT_VALUE_FORM_LESION = {
  id: undefined,
  title: "",
  content: "",
  startTime: "",
  endTime: "",
  className: "",
};